import React, { useEffect, useState } from "react";
import '../dash.css';
export default function CreateTeam(){
    const logins=[
        {id:'a',password:'a11',erno:'211b311',name:'Shuchita',email:'shu@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'b',password:'b11',erno:'211b405',name:'Nancy',email:'nan@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'c',password:'c11',erno:'211b353',name:'Yash',email:'ya@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:44},
        {id:'d',password:'d11',erno:'211b111',name:'C',email:'c@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'e',password:'e11',erno:'211b211',name:'D',email:'d@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'f',password:'f11',erno:'211b411',name:'E',email:'e@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'g',password:'g11',erno:'211b111',name:'F',email:'f@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
        {id:'h',password:'h11',erno:'211b211',name:'G',email:'g@gmail.com',role:'S',phno:9981469401,profilePic:'',teamID:null},
    ]
    const team=[]
    const [createdTeam,setTeam]=useState({
        teamID:'',mentor:'',Fmember:'',member1:'',member2:''
    })
    const [checkOtp,setotp]=useState(
        {otp1:'123',otp2:'321'}
    )
    const[leader,setleader]=useState({name:'',erno:'',phno:''})
    const [member,setMember]=useState(
        {member1:{name:'',erno:'',phno:'',otp:''}},
        {member2:{name:'',erno:'',phno:'',otp:''}}
    ) 
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const lname=event.target.leadername.value
        const lerno=event.target.lerno.value
        const lphno=event.target.lphno.value
        const mem1name=event.target.mem1name.value
        const erno1=event.target.erno1.value
        const phno1=event.target.phno1.value
        const mem2name=event.target.mem2name.value
        const erno2=event.target.erno2.value
        const phno2=event.target.phno2.value
        const otp1=event.target.otp1.value
        const otp2=event.target.otp2.value
        setTeam({Fmember:lerno,member1:erno1,member2:erno2})
        setMember({
         member1:{name:mem1name,erno:erno1,phno:phno1,otp:'123'}, 
         member2:{name:mem2name,erno:erno2,phno:phno2,otp:'456'}
        })

        event.target.reset();
    }
    useEffect(()=>{
        console.log(createdTeam)
        console.log(member)
    })
    return(
        <form onSubmit={handleSubmit} className="create-team">
            <label className="teamform">Team Leader Name </label>
            <input style={{position: 'relative',left: '2vh'}}className="inp" 
            type='text'
            name='leadername'
            id='leadername'
            placeholder="leader name" required></input>
            <div style={{marginTop:'3vh',marginBottom:'3vh'}}>
            <label className="teamform">Enrollment No </label>
            <input  style={{position: 'relative',left: '2vh',marginRight:'10%'}}className="inp"
            type='text'
            name='lerno'
            id='lerno' required></input>
            <label className="teamform">Phone number</label>
            <input style={{position: 'relative',left: '2vh'}} className="inp"
            type='text'
            name='lphno'
            id='lphno' required></input>
            </div>

            <div style={{marginTop:'3vh',marginBottom:'3vh'}}>

                <div style={{marginLeft:'10%', float:'left'}} className="memdetails">
                <label className="teamform">Member 1 </label>
                <input className="inp"
                type='text'
                name='mem1name'
                id='mem1name' required></input>
                <label className="teamform">Enrollment No </label>
                <input className="inp"
                type='text'
                name='erno1'
                id='erno1' required></input>
                <label className="teamform">Phone number</label>
                <input className="inp" 
                type='text'
                name='phno1'
                id='phno1' required></input>
                <div className="buttons">
                    <button className="send"> Send otp</button>
                    <input className="inp" placeholder="enter" required></input>
                    <button className="check">Check</button>
                </div>
                </div>
                <div className="memdetails" style={{marginRight:'10%', float:'right'}}>
                <label className="teamform">Member 2 </label>
                <input className="inp"
                type='text'
                name='mem2name'
                id='mem2name' required></input>
                <label className="teamform">Enrollment No </label>
                <input className="inp"
                type='text'
                name='erno2'
                id='erno2' required></input>
                <label className="teamform">Phone number</label>
                <input className="inp"
                type='text'
                name='phno2'
                id='phno2' required></input>
                <div className="buttons">
                    <button className="send"> Send otp</button>
                    <input className="inp" placeholder="enter" required></input>
                    <button className="check">Check</button>
                </div>
                </div>             
            </div> 
            <button style={{}}>submit</button>         
        </form>
    )
}