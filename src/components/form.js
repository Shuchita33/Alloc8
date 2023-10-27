import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import StuDash from "./studash";

export default function Form(props){
    const navigate=useNavigate()
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
    
    const[data,setdata]=useState({
        id:"",
        password:""
    });

    function getData(e){
       const {name,value}=e.target;
      
     setdata((prev)=>{
        return {...prev,[name]:value}
       }) 
    }

    function submit(e){
       e.preventDefault(e);
       
       if(data.id==="" || data.password==="") {alert("Missing Fields");}

       else if(logins.find(element=>element.id===data.id)){
            
        // id is present 
            let obj=logins.find(element=>element.id===data.id)
            //console.log(obj);
        
        //check for password
            if(obj.password===data.password)
               {console.log(obj);
                console.log(obj.id," and ",obj.password);
                //alert("logged in")
            //go to destination page by passing props using 'state'    
            
                navigate('/dash',{state:{datas:obj}});  
            }
            else alert("Wrong Password")
            
        }   

        else alert("enter a valid ID ")     
        
    }
   
    useEffect(() => {
        let label=document.querySelectorAll('label').forEach(
            label=>{
                label.innerHTML=label.innerText.split('').map(
                    (letters,i)=>`<span style="transition-delay : ${i*50}ms">${letters}</span>`
                ).join('');
            }
        )
    }, []);

    return(      
    <form className="mainform"action="" >
        <h2>{props.acctype} Account</h2>
        <div  className="input-box">
            <input name="id" onChange={getData} type="text" required/>
            <label>ID</label>
        </div>  
        <div className="input-box">
            <input  name="password" onChange={getData} type="password" required/>
            <label>PassWord</label>
        </div>
        <div className="input-box">
            <input  onClick={submit} type="submit" value="Login"/>
        </div>
    </form>
    )
}