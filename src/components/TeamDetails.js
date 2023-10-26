import React from "react";
import '../dash.css';
import user from '../icons/user.png';

export default function TeamDetails(props){
    console.log(props)
    return(
        <div className="team-details">

            <h1>Team No : {props.details.teamID} </h1>
            <h2>Team Name : kuch bhi</h2>
            <h2>Mentor : koi bhi</h2>
            <div className="member-details" >
                <div className="member" style={{marginRight:'10%'}}>
                    <img src={user} alt="qwijiqwjs"></img>
                    <p>{props.details.member1.name}</p>
                    <p>{props.details.member1.erno}</p>
                    <p>{props.details.member1.phno}</p>
                </div>
                
                <div className="member">
                    <img src={user} alt="qwijiqwjs"></img>
                    <p>{props.details.member2.name}</p>
                    <p>{props.details.member2.erno}</p>
                    <p>{props.details.member2.phno}</p>
                </div>
            </div>
        </div>
    )
}