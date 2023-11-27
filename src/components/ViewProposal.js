import React, { useState } from "react";
import user from '../api/data';
import team from '../api/data';
import proposal from '../api/data';
import { useNavigate } from "react-router-dom";

export default function ViewProposal(){
    const navigate=useNavigate()

    async function submitProposal(event){     
        event.preventDefault()
      //---input values from form------
        let title=event.target.title.value
        let tools=event.target.tools.value
        let preknow=event.target.preknow.value
        let subj=event.target.subj.value
        let soft=event.target.soft.value
        let desc=event.target.desc.value
        let otc=event.target.otc.value

        const loggedUser = localStorage.getItem("logged_user");
        const Usererno = JSON.parse(loggedUser)

      //-------check if a user is a part of a team or not------
        const resp= await user.get('/user')
        let obj=resp.data.find(element=>element.erno==Usererno.erno)
        console.log(obj)
        if(obj){
            //----get a proposal id-------
            let PId=1
            const response = await team.get('/proposals')
            const PropIDs=[]
            response.data.forEach(element => {
                PropIDs.push([element.pid])
            });
            PropIDs.sort()
           
            PId=((parseInt(PropIDs[PropIDs.length-1])+1))
            console.log(PId)
           const TId=obj.teamID
           const request={  pid: PId,
                            teamID: TId,
                            mentorID: null,
                            desc:  `Language/ Tools that may be used : ${tools}\nPrerequisite Knowledge Required : ${preknow}\nConcepts/ Subjects : ${subj}\nSoftware/ Tools : ${soft} Description about Project : ${desc} Expected Outcomes : ${otc}`,
                            title: title,
                            status: false}
            navigate('/student/send-proposal',{state:{request}})       
        }
        else{alert("Create a team first")}  
    }
    return(
        <div>
            <div className="viewform">
                <h2>Project Approval Form</h2>
                <form onSubmit={submitProposal}>
                    <div className="d1">
                        <label className="lb1">Broad Title of Project: </label>
                        <input style={{position: 'relative',left: '2vh'}}className="in1"
                        type='text'
                        name='title'
                        id='title' required></input>
                    </div>
                    <div className="d2">
                        <label className="lb3">Language/ Tools that may be used: </label>
                        <input style={{position: 'relative',left: '2vh'}}className="in3"
                        type='text'
                        name='tools'
                        id='tools' required></input>
                    </div>
                    <div>
                    <label className="lb4">Prerequisite Knowledge Required: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in4"
                    type='text'
                    name='preknow'
                    id='preknow' required></input>
                    </div>
                    <div>
                    <label className="lb5">Concepts/ Subjects: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in5"
                    type='text'
                    name='subj'
                    id='subj' required></input>
                    </div>
                    <div>
                    <label className="lb5">Software/ Tools: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in5"
                    type='text'
                    name='soft'
                    id='soft' required></input>
                    </div>
                    <div className="d4">
                    <label className="lb6">Brief Description about Project: </label>
                    <textarea style={{position: 'relative',left: '2vh'}} className="in6" rows={4} cols={40}
                    type='text'
                    name='desc'
                    id='desc' required />
                    </div>
                    <div className="d5">
                    <label className="lb7">Expected Outcomes after this semester: </label>
                    <textarea style={{position: 'relative',left: '2vh'}} className="in7" rows={4} cols={40} 
                    type='text'
                    name='otc'
                    id='otc' required />
                    </div>
                    <div className="btn">
                <button className="sb">Submit</button>
            </div>
                </form>
            </div>
            
        </div>
    )
}