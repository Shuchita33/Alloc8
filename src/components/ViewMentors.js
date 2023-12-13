import React, { useEffect, useState } from "react";
import '../dash.css';
import user from '../api/data'
export default function ViewMentors(){
    const [allMentors,setallMentors]=useState([])
    const getallMentors= async()=>{
        const response= await user.get('/user')
        let final=response.data.filter(element=>element.role=="M")
        final.sort()
        setallMentors(final)
    }
    useEffect(()=>{
        getallMentors()
        console.log(allMentors)
    })

    const DispMentors=allMentors.map(item=>{
        console.log(item)
        return(

            <tr>
                <td>{item.erno}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
            </tr>
        )    
    })

    return(
        <div className="view-mentors">
            <table>
            <thead style={{backgroundColor:'rgb(189, 182, 171)'}}>
                    <td>Erno</td>
                    <td>Member Name</td>
                    <td>Email</td>                
                </thead>
                {DispMentors}
            </table>
        </div>
    )
}