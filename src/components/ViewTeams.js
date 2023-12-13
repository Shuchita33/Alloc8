import React from "react";
import '../dash.css';
import { useState } from "react";

export default function ViewTeams(){
    const [team,setTeam]=useState({})
    return(
        <div className="view-teams">
            <table style={{border:'solid 1px black' }}>
                <thead>
                    <td>TeamNo</td>
                    <td>Members</td>
                    <td>Project Name</td>
                    <td>Mentor</td>                
                </thead>
            </table>
        </div>
    )
}