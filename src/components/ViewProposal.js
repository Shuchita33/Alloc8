import React from "react";
export default function ViewProposal(){
    return(
        <div>
            <div className="viewform">
                <h2>Project Approval Form</h2>
                <form>
                    <div class="d1">
                        <label className="lb1">Broad Title of Project: </label>
                        <input style={{position: 'relative',left: '2vh'}}className="in1"></input>
                    </div>
                    <div class="d2">
                        <label className="lb3">Language/ Tools that may be used: </label>
                        <input style={{position: 'relative',left: '2vh'}}className="in3"></input>
                    </div>
                    <div>
                    <label className="lb4">Prerequisite Knowledge Required: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in4"></input>
                    </div>
                    <div>
                    <label className="lb5">Concepts/ Subjects: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in5"></input>
                    </div>
                    <div>
                    <label className="lb5">Software/ Tools: </label>
                    <input style={{position: 'relative',left: '2vh'}}className="in5"></input>
                    </div>
                    <div className="d4">
                    <label className="lb6">Brief Description about Project: </label>
                    <textarea style={{position: 'relative',left: '2vh'}} className="in6" rows={4} cols={40} />
                    </div>
                    <div className="d5">
                    <label className="lb7">Expected Outcomes after this semester: </label>
                    <textarea style={{position: 'relative',left: '2vh'}} className="in7" rows={4} cols={40} />
                    </div>
                </form>
            </div>
            <div class="btn">
                <button class="sb">Submit</button>
                <button class="ed">Edit</button>
            </div>
        </div>
    )
}