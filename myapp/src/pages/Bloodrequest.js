import React,{useEffect,useState} from 'react'
import Sidenav from '../components/Sidenav'

export default function Bloodrequest() {
  const sendApprove =async(todo)=>{
    try{
   const id=todo.aadhar;
  const response=await fetch("http://localhost:5000/patap/"+id,{method:"POST"});
   console.log(response);
   window.location.reload();
    }catch(err)
    {
      console.error(err.message);
    }
   }
const [todos,setTodos]=useState([]);
  const fn=async()=>{
    try{
const response=await fetch("http://localhost:5000/request");
const jsonData=await response.json();

setTodos(jsonData);
    }
    catch(err)
    {
      console.error(err);
    }
  }
useEffect(()=>{
  fn();
},[]);
  return (
    <div className='donationpage'>
      <Sidenav />
      <div className='donmainpage'>
        <div className='tablediv' style={{overflowX:"auto",overflowY:"auto"}}>
      <table>
        <thead>
                <tr>
                    <th>Aadhaar No.</th>
                    <th>First Name</th>
                    <th>last Name</th>
                    <th>Age</th>
                    <th>Ph No,</th>
                    <th>Sex</th>
                    <th>Reason</th>
                    <th>Bd Grp</th>
                    <th>Units </th>
                    <th>Hospital</th>
                    <th>Approve Request</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => {
                    return (
                        <tr >
                            <td>{todo.aadhar}</td>
                            <td>{todo.fname}</td>
                            <td>{todo.lname}</td>
                            <td>{todo.age}</td>
                            <td>{todo.ph_no}</td>
                            <td>{todo.sex}</td>
                            <td>{todo.reason}</td>
                            <td>{todo.bd_grp}</td>
                            <td>{todo.units}</td>
                            <td>{todo.hospital}</td>
                            <td>
                            {todo.approval==="Received" ? (
    
                          <span>Recieved</span>
                        ) : (
                          
                          <button className="recievebut"type='recieveapp' name='recieveapp' onClick={()=>{sendApprove(todo)}}>Approve</button>
                        )}
                        </td>
                        </tr>
                        
                    )
                })}
                </tbody>
            </table>
            </div>
      </div>
    </div>
  )
}
