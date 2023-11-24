import React, { useState,useEffect } from 'react';
import '../dash.css';
import logo from '../icons/Project.gif';
import navbut from '../icons/nav_but.png';
import { Outlet, useLocation,useNavigate } from 'react-router-dom';

export default function StuDash(props){
    const navigate=useNavigate()  
    //const loginData=props.log
    const saved = localStorage.getItem("logindata");
    const loginData = JSON.parse(saved);
    //console.log(loginData)
    const [student,setStudent]=useState({name:'',erno:'',email:'',phno:'',teamID:''})
    const logins=[
        {id:'a',password:'a11',erno:'211b311',name:'Shuchita',email:'shu@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'b',password:'b11',erno:'211b405',name:'Nancy',email:'nan@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'c',password:'c11',erno:'211b353',name:'Yash',email:'ya@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'d',password:'d11',erno:'211b111',name:'C',email:'c@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'e',password:'e11',erno:'211b211',name:'D',email:'d@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'f',password:'f11',erno:'211b411',name:'E',email:'e@gmail.com',role:'M',phno:9981469401,profilePic:'',teamID:null},
        {id:'g',password:'g11',erno:'211b111',name:'F',email:'f@gmail.com',role:'A',phno:9981469401,profilePic:'',teamID:null},
        {id:'h',password:'h11',erno:'211b211',name:'G',email:'g@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
    ]
    
    const [check,setcheck]=useState('F');
   
    useEffect(()=>{
       
        function getTeaminfo(erno,teamId){
       
            let element=logins.filter(element=>element.teamID===teamId && element.erno!=erno)
            //console.log(element)
            if(element.length===2 && element[0].teamID===teamId && element[1].teamID===teamId){ 
             setcheck('T')
             }      
            } 

    
        if(logins.find(element=>element.id===loginData.id)){
            
        // id is present 
            let obj=logins.find(element=>element.id===loginData.id)
            //console.log(obj);
        
        //check for password
            if(obj.password===loginData.password && obj.role==='S')
            {   //alert("logged in")
                //go to destination page by passing props using 'state'    
                //console.log(obj);   
                setStudent({name:obj.name,erno:obj.erno,email:obj.email,phno:obj.phno,teamID:obj.teamID})
                getTeaminfo(obj.erno,obj.teamID)
                //console.log(student)              
            }
            else {
                alert("Wrong Password")
                navigate('/') }  
        } 

    },[loginData.id, loginData.password, logins, navigate] )
      
    function teamDetails(){
        if(check==='T'){
            navigate('view-team')        
        }
        else   navigate('create-team')
    }


// jsx to student dashboard page
    return(
    <div>
        <header> 
        <div className='dashhead'>
        <img className='logo'src={logo} alt='logo' onClick={()=>{navigate('/student')}}></img>
        <button className="dbuts" onClick={()=>{navigate('/')}}>Logout</button>  
        <img style={{height:'7vh'}}className='navbut'src={navbut} alt='navbut'></img>
        </div>
        </header>
        <div className='card'>
        <img className='pict' alt='pict'></img>
        <div className='profile'>
            <p>{student.name}</p>
            <p>{student.erno}</p>
            <p>{student.email}</p>
            <p>{student.phno}</p>
        </div>
       </div>
       <div className='mainside'>
        <div className='top'>
            <button className='options' onClick={teamDetails}>Create/View Team</button>
            <button className='options' onClick={()=>navigate('view-proposal')} >View Proposal</button>
            <button className='options' onClick={()=>navigate('send-proposal')} >Send Proposal</button>
            <button className='options' onClick={()=>navigate('view-slots')}>View Slots</button>        
        </div>
       <Outlet></Outlet>
       </div>  
    </div>
    )
}