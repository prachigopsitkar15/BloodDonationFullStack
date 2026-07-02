import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Admin() {
  
  const [regin,setregin]=useState({
    name:"",
    email:"",
    password:""
    
  })
  const [loginput,setloginput]=useState({
    lname:"",
    lemail:"",
    lpassword:""
    
  });
  const {lname,lemail,lpassword}=loginput;
  const {name,email,password}=regin;
  const onChange =(e)=>{
    setregin({...regin,[e.target.name]:e.target.value});
  }
  const lonChange =(e)=>{
    setloginput({...loginput,[e.target.name]:e.target.value});
  }
  const onSubmitForm=async(e) =>{
    e.preventDefault();
    try{
      const body={name,email,password};
      const response=await fetch("http://localhost:5000/auth/register",{method:"POST",
    headers:
    {"Content-Type":"application/json"},
  body:JSON.stringify(body)
}

      );
      const parseRes =await response.json();

      localStorage.setItem("token",parseRes.token);
      if(parseRes.token)
      {
        toast.success("Registered Successfully", {
          onClose: () => {
            window.location.href = "/stock";
          },
        });
        
        }
      else{
        
        toast.error(parseRes);
      }
      
    }
    catch(err)
    {
      console.error(err.message);
    }
  }
    const lonSubmitForm=async(e) =>{
      e.preventDefault();
      try{
        const name=lname;
        const email=lemail;
        const password=lpassword;
        const body={name,email,password};
        console.log(body);
        const response=await fetch("http://localhost:5000/auth/login",{method:"POST",
      headers:
      {"Content-Type":"application/json"},
    body:JSON.stringify(body)
  }
  
        );
        const parseRes =await response.json();
  
        
        
      localStorage.setItem("token",parseRes.token);
     if(parseRes.jwtToken)
     {
      console.log("here");
      toast.success("Login Successful");
      
         
            window.location.href = "/stock";
          
        }
      
     else{
      toast.error(parseRes);
    }
      }
      catch(err)
      {
        console.error(err.message);
      }
  }
  return (
    <div className="Admin">
   
        <div className='employeeloginpage'>
        <div className="formbox">
        <h1> Login </h1>
        <form  onSubmit={lonSubmitForm}>
        
        <input type='text' name='lname' placeholder='name' value={lname} onChange={e=>lonChange(e)}></input><br/><br/>
        <input type='email' name='lemail' placeholder='email'  value={lemail} onChange={e=>lonChange(e)}></input><br/><br/>
       <input type='password' name='lpassword' placeholder='password'  value={lpassword} onChange={e=>lonChange(e)}></input><br/><br/>
       
       

<button type='submit' name='submit'>Submit</button>
</form >
</div>
        </div>
        <div className='adminloginpage'>
        <div className="formbox">
        <h1>Register </h1>
        <form onSubmit={onSubmitForm}>
        
        <input type='text' name='name' placeholder='name' value={name} onChange={e=>onChange(e)}></input><br/><br/>
        <input type='email' name='email' placeholder='email'  value={email} onChange={e=>onChange(e)}></input><br/><br/>
       <input type='password' name='password' placeholder='password'  value={password} onChange={e=>onChange(e)}></input><br/><br/>
       

<button  type='submit' name='submit'>Submit</button>
</form>
</div>
        </div>
    

  </div>
  )
}
