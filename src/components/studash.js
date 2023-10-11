import React from 'react';
import '../dash.css';
import logo from '../icons/Project.gif';
import navbut from '../icons/nav_but.png';
export default function StuDash(props){
    const {name,erno}=props;
    return(
    <div>
        <header> 
        <div className='dashhead'>
        <img className='logo'src={logo} alt='logo'></img>
        <button className="dbuts">Logout</button>  
        <img style={{height:'7vh'}}className='navbut'src={navbut} alt='navbut'></img>
        </div>
       </header>
       <div className='card'>
        <img className='pict'></img>
        <div className='profile'>
            <p>{name}</p>
            <p>{erno}</p>
        </div>
       </div>
       <div className='mainside'>
        <div className='top'>
            <button className='options'>Create Team</button>
            <button className='options'>View Proposal</button>
            <button className='options' >Send Proposal</button>
            <button className='options'>View Slots</button>        
        </div>
        <div className='content'></div>
       </div>

  
    </div>
    )
}