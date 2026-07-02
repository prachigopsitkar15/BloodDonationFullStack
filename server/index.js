const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db");

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

// Importing Models
const Person = require("./models/Person");
const Blood = require("./models/Blood");
const Donates = require("./models/Donates");
const Request = require("./models/Request");
const Receiver = require("./models/Receiver");

// Routes for Donations and Requests
app.post("/don", async (req, res) => {
  try {
    console.log(req.body); // Log the request body

    const { aadh, fname, lname, age, ph, sex, mh, bldg, units, bnum } = req.body;

    const newPerson = new Person({
      aadhar: aadh,
      fname,
      lname,
      age,
      ph_no: ph,
      sex,
      bd_grp: bldg,
    });
    await newPerson.save();

    const newBlood = new Blood({
      bd_num: bnum,
      bd_grp: bldg,
      bd_status: "No",
    });
    await newBlood.save();

    const newDonation = new Donates({
      person_id: aadh,
      bd_num: bnum,
      med_history: mh,
      units: units,
    });
    await newDonation.save();

    res.json(newPerson);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/pat", async (req, res) => {
  try {
    console.log(req.body); // Log the request body

    const { aadh, fname, lname, age, ph, sex, reason, bldg, units, hsptl } = req.body;

    const newPerson = new Person({
      aadhar: aadh,
      fname,
      lname,
      age,
      ph_no: ph,
      sex,
      bd_grp: bldg,
    });
    await newPerson.save();

    const newRequest = new Request({
      person_id: aadh,
      hospital: hsptl,
      reason: reason,
      units: units,
    });
    await newRequest.save();

    res.json(newPerson);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/donap/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Blood.updateOne({ bd_num: id }, { bd_status: "Donated" });
    res.json("Approve blood for the id");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/patap/:id", async (req, res) => {
    try {
      const { id } = req.params;
      
      const person = await Person.findOne({ aadhar: id });
      const bldg = person.bd_grp;
      

      const blood = await Blood.findOne({ bd_grp: bldg,bd_status:"Donated"});
      if (!blood) return res.status(404).json("No available blood for the requested group");
        
      const requestRecord = await Request.findOne({ person_id: id }); // Rename 'req' to 'requestRecord' or another appropriate name
        

      await new Receiver({
        bd_num: blood.bd_num,
        receiver_aadhar: id,
        req_num: requestRecord._id, // Use 'requestRecord' instead of 'req'
      }).save();
  
     
      await Request.updateOne({ person_id: id }, { approval: "Received" });
  
      res.json("Approve blood for the id");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  
  app.get("/stock", async (req, res) => {
    try {
      // Aggregating blood counts by blood group and status "Donated"
      const stockCounts = await Blood.aggregate([
        { $match: { bd_status: "Donated" } },
        { $group: { _id: "$bd_grp", count: { $sum: 1 } } },
      ]);
      
     
      // Initializing blood group counts
      const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
      const stock = bloodGroups.reduce((acc, group) => {
        acc[group] = 0;
        return acc;
      }, {});
  
      // Filling the stock object with counts from the aggregation result
      stockCounts.forEach(item => {
        stock[item._id] = item.count;
      });
  
       // Debugging log
  
      // Counting total donors
      const donorsCount = await Donates.countDocuments();
  
      // Counting total requests
      const requestsCount = await Request.countDocuments();
  
      // Counting approved requests
      const approvedRequestsCount = await Request.countDocuments({ approval: "Received" });
  
      // Summing total units donated for "Donated" status
      const totalUnitsDonated = await Donates.aggregate([
        { 
          $match: { 
            bd_num: { $in: (await Blood.find({ bd_status: "Donated" }, { bd_num: 1 })).map(b => b.bd_num) } 
          } 
        },
        { 
          $group: { _id: null, total: { $sum: "$units" } } 
        },
      ]);
  
      
  
      // Creating response object
      const response = {
        ap: stock["A+"],
        an: stock["A-"],
        bp: stock["B+"],
        bn: stock["B-"],
        abp: stock["AB+"],
        abn: stock["AB-"],
        op: stock["O+"],
        on: stock["O-"],
        donors: donorsCount,
        request: requestsCount,
        app: approvedRequestsCount,
        tot: totalUnitsDonated[0]?.total || 0,
      };
  
      res.json(response);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  
app.get("/donation", async (req, res) => {
  try {
    const donations = await Donates.aggregate([
      { $lookup: { from: "people", localField: "person_id", foreignField: "aadhar", as: "person" } },
      { $lookup: { from: "bloods", localField: "bd_num", foreignField: "bd_num", as: "blood" } },
      { $unwind: "$person" },
      { $unwind: "$blood" },
    ]);
    
    const bdNums = [];

    // Iterate over donations array and push bd_num values into bdNums array
    donations.forEach(donation => {
      bdNums.push({bd_num:donation.bd_num,med_history:donation.med_history,units:donation.units,aadhar:donation.person.aadhar, fname:donation.person.fname,lname:donation.person.lname,age:donation.person.age,ph_no:donation.person.ph_no,sex:donation.person.sex,bd_grp:donation.person.bd_grp,bd_status:donation.blood.bd_status});
      
    });
   // const ans={aadhar:}
   
    res.json(bdNums);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/request", async (req, res) => {
  try {
    const donations = await Request.aggregate([
      { $lookup: { from: "people", localField: "person_id", foreignField: "aadhar", as: "person" } },
      { $unwind: "$person" },
    ]);
    
    const bdNums = [];
    
    // Iterate over donations array and push bd_num values into bdNums array
    donations.forEach(donation => {
      bdNums.push({bd_num:donation.bd_num,med_history:donation.med_history,units:donation.units,aadhar:donation.person.aadhar, fname:donation.person.fname,lname:donation.person.lname,age:donation.person.age,ph_no:donation.person.ph_no,sex:donation.person.sex,bd_grp:donation.person.bd_grp,hospital:donation.hospital, reason:donation.reason,approval:donation.approval});
    });
    
   // const ans={aadhar:}
    res.json(bdNums);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});