import React ,{useEffect,useState}from 'react'
import Sidenav from '../components/Sidenav'
import blood from './205916.png';
import donoricon from './donors.png';
import request from './bell.png';
import approved from './quality.png';
import bloodunits from './iv-drip.png';
export default function Bloodstock() {

  const [todos,setTodos]=useState("");
  const getValues=async()=>{
    try {
    
      const response= await fetch("http://localhost:5000/stock");
      
      const res= await response.json();
      setTodos(res);
     
    } catch (err) {
      console.error(err.message);
    }
  }
useEffect(()=>{
  getValues();
})
  return (
    <div className='stockpage'>
      <Sidenav/>
      <div className='stockmainpage'>
      <div className='firstrow'>
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>A+</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          
          <h6 className='bdnumber'>{todos.ap}</h6>
            
        </div>
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>A-</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.an}</h6>
        </div>
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>B+</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.bp}</h6>
        </div>
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>B-</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.bn}</h6>
        </div>

      </div>
      <div className='secondrow'>
      <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>O+</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.op}</h6>
        </div>
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>O-</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.on}</h6>
        </div>
        
        <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>AB+</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.abp}</h6>
        </div>
      <div className='card1'>
          <div className='grpimg'>
          <h2 className='bdgroupname'>AB-</h2>
          <img className='bloodicon' src={blood} /></div>
          <br/><br/>
          <h6 className='bdnumber'>{todos.abn}</h6>
        </div>
      </div>
      <div className='lastrow'>
      <div className='card2'>
        <img className='lastrowicon' src={donoricon}/>
          <h5 className='stocktitle'>Total Donors</h5>
          <h6 className='stocknumber'>{todos.donors}</h6>
        </div>
        <div className='card2'>
        <img className='lastrowicon' src={request}/>
          <h5 className='stocktitle'>Total Requests</h5>
          <h6 className='stocknumber'>{todos.request}</h6>
        </div>
        <div className='card2'>
        <img className='lastrowicon' src={approved}/>
          <h5 className='stocktitle'>Approved Requests</h5>
          <h6 className='stocknumber'>{todos.app}</h6>
        </div>
        <div className='card2'>
        <img className='lastrowicon' src={bloodunits}/>
          <h5 className='stocktitle'>Total Blood Unit(in ml)</h5>
          <h6 className='stocknumber'>{todos.tot}</h6>
        </div>
      </div>
    </div>
    </div>
  )
}
