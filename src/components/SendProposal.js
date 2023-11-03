import React, { useEffect } from "react";
import '../dash.css';
import propic from '../icons/user.png';
export default function SendProposal(){
    const mentorDetails=[
        {name:'Dr. Prateek Pandey',erno:'1234' , phno:'0123456789',email:'prateek.pandey@juet.ac.in',profilepic:'',desc:'Blockchain, ML, Software Engineering and Computer Programming'},
        {name:'Prof. Mahesh Kumar',erno:'1234' , phno:'0123456789',email:'mahesh.kumar@juet.ac.in',profilepic:'',desc:'Computer Networks, Networks Security, ML, IoT, Deep Neural Network'},
        {name:'Prof. Sanjay Garg',erno:'1234', phno:'0123456789',email:'sanjay.garg@juet.ac.in',profilepic:'',desc:'Data Science, Algorithms and Pattern Recognition'},
        {name:'Prof. Vipin Tyagi',erno:'1234', phno:'0123456789',email:'vipin.tyagi@juet.ac.in',profilepic:'',desc:'Digital Image Processing, Cyber Forensics and Speech Recognition'},
        {name:'Dr. Rahul Pachauri',erno:'1234', phno:'0123456789',email:'rahul.pachauri@juet.ac.in',profilepic:'',desc:'Digital Signal Processing, Wireless/Mobile Communication, ML, Neural Networks'},
        {name:'Dr. Amit Kumar',erno:'1234', phno:'0123456789',email:'amit.kumar@juet.ac.in',profilepic:'',desc:'AI, Soft Computing'},
        {name:'Dr. Dinesh Kumar Verma',erno:'1234', phno:'0123456789',email:'dinesh.verma@juet.ac.in',profilepic:'',desc:'software engineering, Micro Processor and Controller'},
        {name:'Dr. Ajay Kumar',erno:'1234', phno:'0123456789',email:'ajay.kumar@juet.ac.in',profilepic:'',desc:'Data-Mining, Data Science and Computer Networking'},
        {name:'Dr. Neelesh Kumar Jain',erno:'1234', phno:'0123456789',email:'neelesh.jain@juet.ac.in',profilepic:'',desc:'Digital Image Forensics, Computer Networks, ML, Data Structure, Design & Analysis of Algorithms'},
        {name:'Dr. Nileshkumar R. Patel',erno:'1234', phno:'0123456789',email:'nilesh.patel@juet.ac.in',profilepic:'',desc:'Wireless Sensor Network , IoT, Machine and Deep Learning'},
        {name:'Dr. Amit Kumar Srivastava',erno:'1234', phno:'0123456789',email:'amit.srivastava1@juet.ac.in',profilepic:'',desc:'Model based Engineering, AI and Computational Intelligence, ML, Robotics, Computer Vision'},
        {name:'Dr. P.S. Banerjee',erno:'1234', phno:'0123456789',email:'partha.banerjee@juet.ac.in',profilepic:'',desc:'Natural Language Processing, AI, Data Base Management System, Unstructured Data Handling'},
        {name:'Dr. Gaurav Saxena',erno:'1234', phno:'0123456789',email:'gaurav.saxena@juet.ac.in',profilepic:'',desc:'Signal processing, DCS, AI&ML, IoT, ADC, VLSI Architecture design and Computer Organization & Architecture'},
        {name:'Dr. Kunj Bihari Meena',erno:'1234', phno:'0123456789',email:'kunjbihari.meena@juet.ac.in',profilepic:'',desc:'Digital Image Forensics, Deep Learning, Image Processing, Computer Vision, OOPs, Data Structures'}
    ]
    useEffect(()=>{
        const rows=Math.ceil(mentorDetails.length/4)
        console.log(rows)

    },[])
    const elements=mentorDetails.map(item=>{
        return(
            <div className="mentor-details">
            <div className="info">
            <img src={propic} alt="qwijiqwjs"></img>
            <p style={{fontSize:'1.4em',fontWeight:'600'}}>{item.name}</p>
            <p>{item.email}</p>
            <p style={{fontWeight:'bold',left:'10%'}}>Areas of Interest : </p>
            <p>{item.desc}</p>
            </div>
            <button onClick={()=>{console.log(item)}}>send</button>
            </div>
        )
    })
    
    return(
       <div className="send-proposal">
                {/* <div style={{width:'80%',height:'10vh',backgroundColor:'rgb(189, 182, 171)',margin:'3vh'}}></div> */}
          <h3>Select Mentor : </h3>
          <div className="card-container">                 
                {elements.slice(0,4)}
          </div>
          <div className="card-container">                 
                {elements.slice(4,8)}
          </div>
          <div className="card-container">                 
                {elements.slice(8,12)}
          </div>
          <div className="card-container">                 
                {elements.slice(12,16)}
          </div>

       </div>
    )
}