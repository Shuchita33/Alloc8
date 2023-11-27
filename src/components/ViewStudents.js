import React, { useEffect, useState } from "react";
import '../dash.css';
import user from '../api/data'
export default function ViewStudents(){
    const [allStudents,setAllStudents]=useState([])
    const getAllStudents= async()=>{
        const response= await user.get('/user')
        setAllStudents(response.data)
    }
    useEffect(()=>{
        getAllStudents()
        console.log(allStudents)
    },[])
    return(
        <div className="view-students">

        </div>
    )
}