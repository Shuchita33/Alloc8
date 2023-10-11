import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Landing  from '../src/components/landing';
import Form from '../src/components/form';
import Footer from '../src/components/footer';
import './App.css';
import './dash.css';
import StuDash from './components/studash';
function App() {
  let [acc,setacc]=useState("Admin");
  return (
    <div>
    <Routes>   
      <Route path='/' 
          Component={()=>
            <div className='landing'>
              <Landing ></Landing>
              <div className='log-opts'>
              <button className='box' onClick={()=>{setacc("Admin")}}>
              <span className="actual-text">&nbsp;Administrator&nbsp;</span>
              <span className="hover-text" aria-hidden="true">&nbsp;Administrator&nbsp;</span>
              </button>  
              <button className='box' onClick={()=>{setacc("Student")}} >
              <span className="actual-text">&nbsp;Student&nbsp;</span>
              <span className="hover-text" aria-hidden="true">&nbsp;Student&nbsp;</span>
              </button>
              <button className='box' onClick={()=>{setacc("Mentor")}}>
              <span className="actual-text">&nbsp;Mentor&nbsp;</span>
              <span className="hover-text" aria-hidden="true">&nbsp;Mentor&nbsp;</span>   
              </button>   
              </div>
              <Form acctype={acc}></Form>
              <div style={{height:'50vh',width:'100%'}}></div>
              <Footer></Footer>
            </div>    
        }>
        </Route>              
        <Route path='/dash' 
               Component={()=>
                <div className='studash'>
                <StuDash name="shu" erno="211b311"></StuDash>
              </div>
             }>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
