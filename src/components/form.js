import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Form(props){   
    const navigate=useNavigate()   
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
       e.preventDefault(e)
       console.log(props)
       props.log(data)
       navigate('/dash')          
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