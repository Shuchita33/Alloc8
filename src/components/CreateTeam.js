import React from "react";
import '../dash.css';
export default function CreateTeam(){
    return(
        <div className="create-team">
            <label className="teamform">Team Leader Name </label>
            <input style={{position: 'relative',left: '2vh'}}className="inp" placeholder="leader name"></input>
            <div style={{marginTop:'3vh',marginBottom:'3vh'}}>
            <label className="teamform">Enrollment No </label>
            <input  style={{position: 'relative',left: '2vh',marginRight:'10%'}}className="inp"></input>
            <label className="teamform">Phone number</label>
            <input style={{position: 'relative',left: '2vh'}} className="inp" ></input>
            </div>

            <div style={{marginTop:'3vh',marginBottom:'3vh'}}>

                <div style={{marginLeft:'10%', float:'left'}} className="memdetails">
                <label className="teamform">Member 1 </label>
                <input className="inp"></input>
                <label className="teamform">Enrollment No </label>
                <input className="inp"></input>
                <label className="teamform">Phone number</label>
                <input className="inp" ></input>
                <div className="buttons">
                    <button className="send"> Send otp</button>
                    <input className="inp" placeholder="enter"></input>
                    <button className="check">Check</button>

                </div>
                </div>
 
                <div className="memdetails" style={{marginRight:'10%', float:'right'}}>
                <label className="teamform">Member 2 </label>
                <input className="inp"></input>
                <label className="teamform">Enrollment No </label>
                <input className="inp"></input>
                <label className="teamform">Phone number</label>
                <input className="inp" ></input>
                <div className="buttons">
                    <button className="send"> Send otp</button>
                    <input className="inp" placeholder="enter"></input>
                    <button className="check">Check</button>

                </div>

                </div>

            </div>
        </div>
    )
}