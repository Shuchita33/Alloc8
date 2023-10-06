import React,{useEffect, useState} from 'react';
import Landing  from '../src/components/landing';
import Form from '../src/components/form';
import Footer from '../src/components/footer';
import './App.css';
function App() {
  
  let [acc,setacc]=useState("Admin");
  return (
    <div>
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
    </div>
  );
}

export default App;
