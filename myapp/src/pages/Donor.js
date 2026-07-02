import React ,{ useState }from 'react'
import '../App.css';
import Sidenav from '../components/Sidenav';


export default function Donor() {
  const [aadh,setaadh]=useState("");
  const [fname,setfname]=useState("");
  const [lname,setlname]=useState("");
  const [age,setage]=useState("");
  const [sex,setsex]=useState("");
  const [ph,setph]=useState("");
  const [mh,setmh]=useState("");
  const [bldg,setbldg]=useState("");
  const [units,setunits]=useState("");
  const [bnum,setbnum]=useState("");
  const onSubmitForm=async (e) =>{
    e.preventDefault();
    try{
      const body={aadh,fname,lname,age,sex,ph,mh,bldg,units,bnum};
      const response = await fetch("http://localhost:5000/don",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)

      });
      window.location.reload();
    }
    catch(err)
    {
      console.error(err.message);
    }
  }
  return (
    <div className="Donor">
      <Sidenav/>
      <div className ="donorpage">
        <div className="formbox">
        <h1>Donor Details</h1>
        <form  onSubmit={onSubmitForm}>
          <div className='form'>
        <div className='leftform'>
            <input type='text' name='Aadhar Number' placeholder='Aadhar Number' value={aadh} onChange={e=>setaadh(e.target.value)}></input><br/><br/>
       <input type='text' name='Firstname' placeholder='Firstname' value={fname} onChange={e=>setfname(e.target.value)}></input><br/><br/>
       <input type='text' name='LastName' placeholder='LastName' value={lname} onChange={e=>setlname(e.target.value)}></input><br/><br/>
       <input type='text' name='Age' placeholder='Age' value={age} onChange={e=>setage(e.target.value)}></input><br/><br/>
       
       
       <input type='text' name='Ph Number' placeholder='Ph Number' value={ph} onChange={e=>setph(e.target.value)}></input><br/><br/>
        </div>
<div className='rightform'>
       <input type='text' name='Sex' placeholder='Sex' value={sex} onChange={e=>setsex(e.target.value)}></input><br/><br/>
       <input type='text' name='Medical History' placeholder='Medical History' value={mh} onChange={e=>setmh(e.target.value)}></input><br/><br/>
       <input type='text' name='Blood Group' placeholder='Blood Group' value={bldg} onChange={e=>setbldg(e.target.value)}></input><br/><br/>
       <input type='text' name='Units' placeholder='Units' value={units} onChange={e=>setunits(e.target.value)}></input><br/><br/>
       <input type='text' name='Blood Number' placeholder='Blood Number' value={bnum} onChange={e=>setbnum(e.target.value)}></input><br/><br/>
       </div>


</div>
<button type='submit' name='submit'>Submit</button>
</form>
        </div>
      </div>
    </div>
  )
}
