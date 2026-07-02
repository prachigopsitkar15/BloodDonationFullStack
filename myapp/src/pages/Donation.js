import React,{useEffect,useState} from 'react'
import Sidenav from '../components/Sidenav'

export default function Donation() {
 const sendApprove =async(id)=>{
  try{
    console.log("in func");
const response=await fetch("http://localhost:5000/donap/"+id,{method:"POST"});
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

const response=await fetch("http://localhost:5000/donation");
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
console.log(todos);
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
      <th>Last Name</th>
      <th>Age</th>
      <th>Ph No.</th>
      <th>Sex</th>
      <th>Med. History</th>
      <th>Bd Grp</th>
      <th>Units</th>
      <th>Bd Number</th>
      <th>Approve</th>
    </tr>
  </thead>

  <tbody>
    {todos.map(todo=>(
      <tr key={todo.aadhar}>
        <td>{todo.aadhar}</td>
        <td>{todo.fname}</td>
        <td>{todo.lname}</td>
        <td>{todo.age}</td>
        <td>{todo.ph_no}</td>
        <td>{todo.sex}</td>
        <td>{todo.med_history}</td>
        <td>{todo.bd_grp}</td>
        <td>{todo.units}</td>
        <td>{todo.bd_num}</td>
        <td>
  {todo.bd_status==="Donated" ? (
    
    <span>Approved</span>
  ) : (
    
    <button className="approvebut"type='donapp' name='donapp' onClick={()=>{sendApprove(todo.bd_num)}}>Approve</button>
  )}
</td>
        
      </tr>
    ))}
  </tbody>
</table>

            </div>
      </div>
    </div>
  )
}
