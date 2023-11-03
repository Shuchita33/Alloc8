import React,{useEffect, useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Landing  from '../src/components/landing';
import Form from '../src/components/form';
import Footer from '../src/components/footer';
import './App.css';
import './dash.css';
import StuDash from './components/studash';
import CreateTeam from './components/CreateTeam';
import TeamDetails from './components/TeamDetails';
import ViewProposal from './components/ViewProposal';
import ViewSlots from './components/ViewSlots';
import SendProposal from './components/SendProposal';
import MentorDash from './components/MentorDash';
import Admin from './components/Admin';
function App() {
  let [acc,setacc]=useState("Admin")
  // let [loginCred,setlogin]=useState({
  //   id:'',password:''
  // })
  // function login(loginCred){
  //   console.log(loginCred)
  //   setlogin({id:loginCred.id,password:loginCred.password})
  // }
  
  return (
    <div>
    <Routes>   
      <Route path='/' 
          element={
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
              <Form acctype={acc} 
              //</div>log={login}
              />
              <div style={{height:'50vh',width:'100%'}}></div>
              <Footer/>
            </div>    
        }>
        </Route>              
        <Route path='/student' 
              element={
                <div className='studash'><StuDash/></div>} >
                  <Route path='create-team' element={<CreateTeam/>}/>
                  <Route path='view-team' element={<TeamDetails/>}/>
                  <Route path='view-proposal' element={<ViewProposal/>}/>
                  <Route path='send-proposal' element={<SendProposal/>}/>
                  <Route path='view-slots' element={<ViewSlots/>}/>
        </Route>
        <Route path='/mentor' 
        element={<div className='mentor'><MentorDash/></div>}>
        </Route>
        <Route path='/admin' 
        element={<div className='admin'><Admin/></div>}>
        </Route>
     </Routes>
    </div>
  );
}

export default App;