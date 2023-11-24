import React, { useState,useEffect } from 'react';
import '../dash.css';
import logo from '../icons/Project.gif';
import navbut from '../icons/nav_but.png';
import { Outlet, useLocation,useNavigate } from 'react-router-dom';

export default function MentorDash(props){
    const navigate=useNavigate()
    const [proposal,setproposal]=useState({
        pid:'',teamId:'',mentor:'',title:'',desc:'',status:''
    })
    return(
    <div>
        <header> 
        <div className='dashhead'>
        <img className='logo'src={logo} alt='logo' onClick={()=>{navigate('/mentor')}}></img>
        <button className="dbuts" onClick={()=>{navigate('/')}}>Logout</button>  
        <img style={{height:'7vh'}}className='navbut'src={navbut} alt='navbut'></img>
        </div>
        </header>
        <div className='card'>
        <img className='pict' alt='pict'></img>
        <div className='profile'>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
       </div>
       <div className='mainside'>
        <div className='top'>
            <button className='options' onClick={()=>navigate('create-team')}>Create/View Team</button>
            <button className='options' onClick={()=>navigate('view-proposal')} >View Proposal</button>
            <button className='options' onClick={()=>navigate('send-proposal')} >Send Proposal</button>
            <button className='options' onClick={()=>navigate('view-slots')}>View Slots</button>        
        </div>
       <Outlet></Outlet>
       </div>  
    </div>
    )
}