import React, { useEffect, useState } from "react";
import '../dash.css';
import proposal from '../api/data'
import { useLocation } from "react-router-dom";
import user from '../api/data';
export default function NewProposals(){
    const location=useLocation()
    const id=location.state
    const [team,setMem]=useState([])
    const [form,setForm]=useState({})
    async function getFormDetails(){
        const getid=await proposal.get('/proposals')
        let pid=getid.data.find(ele=>ele.id===id)
        //console.log(pid.desc)
        setForm({
            title:pid.title,
            info1:pid.desc.info1,
            info2:pid.desc.info2,
            info3:pid.desc.info3,
            info4:pid.desc.info4,
            info5:pid.desc.info5,
            info6:pid.desc.info6
        })
        const getTeam=await user.get('/user')
        let members=getTeam.data.filter(ele=>ele.teamID===pid.teamID)
        setMem([members[0].name,members[1].name,members[2].name])

    }
    useEffect(()=>{
        getFormDetails()
        
    },[])
    return(
        <div className="get-proposals">
            
          <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 
           <h2 style={{marginRight:'5%'}}>Members :</h2>
            <div><h3>{team[0]}</h3>
            <h3>{team[1]}</h3>
            <h3>{team[2]}</h3>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <table className="desc-table">
            <tr>
                <td><b>Title</b></td>
                <td>{form.title}</td>
            </tr>
            <tr>
                <td><b>Languages Used</b></td>
                <td>{form.info1}</td>
            </tr>
            <tr>
                <td><b>Prerequisite knowledge</b></td>
                <td>{form.info2}</td>
            </tr>
            <tr>
                <td><b>Subjects</b></td>
                <td>{form.info3}</td>
            </tr>
            
            <tr>
                <td><b>Software Tools</b></td>
                <td>{form.info4}</td>
            </tr>
            <tr>
                <td><b>Brief Description</b></td>
                <td>{form.info5}</td>
            </tr>
            <tr>
                <td><b>Outcome</b></td>
                <td>{form.info6}</td>
            </tr>
        </table>
          </div>
          <div style={{display:'block'}}>
          <button className="accept">Accept</button> 
          <button className="decline">Decline</button>
          </div>
        </div>
    )
}