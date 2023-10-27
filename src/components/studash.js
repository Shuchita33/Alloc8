import React, { useState,useEffect } from 'react';
import '../dash.css';
import logo from '../icons/Project.gif';
import navbut from '../icons/nav_but.png';
import CreateTeam from './CreateTeam.js';
import TeamDetails from './TeamDetails';
import ViewProposal from './ViewProposal.js';
import ViewSlots from './ViewSlots.js';
import SendProposal from './SendProposal.js';
import { useLocation } from 'react-router-dom';

export default function StuDash(props){
    const location=useLocation()
    console.log(location.state);
    const [check,setcheck]=useState('F');
    const [cont,setcont]=useState("");   
    const [teamData,setDetails]=useState({
        teamID:'',
        member1:{name:'',erno:'',phno:''},
        member2:{name:'',erno:'',phno:''}
    });

    const logins=[
        {id:'a',password:'a11',erno:'211b311',name:'Shuchita',email:'shu@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:56},
        {id:'b',password:'b11',erno:'211b405',name:'Nancy',email:'nan@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'c',password:'c11',erno:'211b353',name:'Yash',email:'ya@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:56},
        {id:'d',password:'d11',erno:'211b111',name:'C',email:'c@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'e',password:'e11',erno:'211b211',name:'D',email:'d@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'f',password:'f11',erno:'211b411',name:'E',email:'e@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'g',password:'g11',erno:'211b111',name:'F',email:'f@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'h',password:'h11',erno:'211b211',name:'G',email:'g@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
    ]
    useEffect(()=>getTeaminfo(logins,location.state.datas.teamID),[])

    function getTeaminfo(data,id){
            let idd=location.state.datas.teamID;
            let element=data.filter(element=>element.teamID==idd && element.name!=location.state.datas.name)
            if(element.length==2 && element[0].teamID==idd && element[1].teamID==idd)
            { 
                setDetails({...teamData,teamID:element[0].teamID,
                member1:{name:element[0].name,erno:element[0].erno,phno:element[0].phno},
                member2:{name:element[1].name,erno:element[1].erno,phno:element[1].phno},
            })
            setcheck('T')
        }
        
    console.log(teamData)
    } 
    function teamDetails(){
        
        if(check==='T'){
            setcont(<TeamDetails details={teamData}></TeamDetails>)
        }
        else setcont(<CreateTeam></CreateTeam>)
    }

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
        <img className='pict' alt='pict'></img>
        <div className='profile'>
            <p>{location.state.datas.name}</p>
            <p>{location.state.datas.erno}</p>
            <p>{location.state.datas.email}</p>
            <p>{location.state.datas.phno}</p>
        </div>
       </div>
       <div className='mainside'>
        <div className='top'>
            <button className='options' onClick={teamDetails}>Create/View Team</button>
            <button className='options' onClick={()=>setcont(<ViewProposal/>)} >View Proposal</button>
            <button className='options' onClick={()=>setcont(<SendProposal/>)} >Send Proposal</button>
            <button className='options' onClick={()=>setcont(<ViewSlots/>)}>View Slots</button>        
        </div>
        {cont}
       </div>  
    </div>
    )
}