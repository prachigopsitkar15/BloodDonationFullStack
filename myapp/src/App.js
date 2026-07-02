

import './App.css';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Donor from './pages/Donor';
import Patient from './pages/Patient';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Bloodrequest from './pages/Bloodrequest';
import Logout from './pages/Logout';
import Bloodstock from './pages/bloodstock';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {
  <ToastContainer/>
  let component
  

  switch(window.location.pathname){
    case "/":
      component =<Home  />
      break;
      case "/home":
      component =<Home />
      break;
      case "/donor":
        component=<Donor  />
        break
      case "/patient":
     component=<Patient  />
        break
        case "/admin":
       
          component=<Admin  />
        
       
          
          break
          case "/donation":
            
        
          component=<Donation  />
          break
          case "/request":
          
          
          component=<Bloodrequest  />
          break
          case "/stock":
           
       
          component=<Bloodstock  />
          break
          case "/logout":
          component=<Logout  />
          break

  }
  return (
    <>
    <Navbar/>
    <div className="container">{component}</div>
    </>
   
  );
}

export default App;
