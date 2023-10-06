import React, { useState,useEffect} from "react";

export default function Form(props){
    const logins=[
        {id:'a',password:'a11'},
        {id:'b',password:'b11'},
        {id:'c',password:'c11'},
        {id:'d',password:'d11'},
        {id:'e',password:'e11'},
        {id:'f',password:'f11'},
        {id:'g',password:'g11'},
        {id:'h',password:'h11'},
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
        console.log("DATA IS ");
       console.log(data);
       e.preventDefault();
       if(data.id==="" || data.password==="") {alert("Missing Fields");}
       else if(logins.find(element=>element.id===data.id)){
            console.log("yesss")
            let obj=logins.find(element=>element.id===data.id)
            console.log(obj);
          
            if(obj.password===data.password)
               {alert("logged in")}
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
            <label  >ID</label>
        </div>  
        <div className="input-box">
            <input  name="password" onChange={getData} type="password" required/>
            <label >PassWord</label>
        </div>
        <div className="input-box">
            <input  onClick={submit} type="submit" value="Login"/>
        </div>
        

    </form>
    )
}