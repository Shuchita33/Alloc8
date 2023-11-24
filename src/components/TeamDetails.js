import React from "react";
import '../dash.css';
import user from '../icons/user.png';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function TeamDetails(){
    const navigate=useNavigate();
    const saved = localStorage.getItem("logindata");
    const loginData = JSON.parse(saved);
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
    
    const [mem1,setMem1]=useState({
        name:'',erno:'',phno:'',teamID:''
     });
     const [mem2,setMem2]=useState({
         name:'',erno:'',phno:'',teamID:''
      });
//    useEffect(()=>{
//         setMem1({name:'d',erno:'12',phno:'3'})
//         console.log(mem1)
//    },[null])

     function getTeaminfo(erno,teamId){
        
        let element=logins.filter(element=>element.teamID===teamId && element.erno!=erno)
        console.log(element)
       
        if(element.length===2 && element[0].teamID===teamId && element[1].teamID===teamId){ 
            console.log(element[0], element[1])
            setMem1({name:element[0].name,erno:element[0].erno,phno:element[0].phno,teamID:element[0].teamID})
            setMem2({name:element[1].name,erno:element[1].erno,phno:element[1].phno,teamID:element[0].teamID})
         setcheck('T')
         }      
        } 
    useEffect(()=>{
 
       if(logins.find(element=>element.id===loginData.id)){
            
            let obj=logins.find(element=>element.id===loginData.id)
        
        //check for password
            if(obj.password===loginData.password)
            {   //alert("logged in")
                //go to destination page by passing props using 'state'    
                console.log(obj);   
                getTeaminfo(obj.erno,obj.teamID)
                console.log(mem1);
             
            }
            else {
                alert("Some error occured, Login again.")
                navigate('/') }  
        } 

        else {
            alert("Some error occured, Login again.")   
            navigate('/')
        }  
    })
    return(
        <div className="team-details">

            <h1>Team No : {mem1.teamID} </h1>
            <h2>Team Name : -</h2>
            <h2>Mentor : not assigned</h2>
            <div className="member-details" >
                <div className="member" style={{marginRight:'10%'}}>
                    <img src={user} alt="qwijiqwjs"></img>
                    <p>{mem1.name}</p>
                    <p>{mem1.erno}</p>
                    <p>{mem1.phno}</p>
                </div>
                
                <div className="member">
                    <img src={user} alt="qwijiqwjs"></img>
                    <p>{mem2.name}</p>
                    <p>{mem2.erno}</p>
                    <p>{mem2.phno}</p>
                </div>
            </div>
        </div>
    )
}