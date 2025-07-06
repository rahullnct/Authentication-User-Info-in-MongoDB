import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import { useState } from 'react';

function App() {
   const[formtype,setformtype]=useState({
    name:"",email:"",password:"",location:""
  });

  function changehandler(event)
  {
    setformtype((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
 const submithandler=async(event)=>{
 {
   event.preventDefault();
   let result= await fetch("http://localhost:3000/api/v1/signup",{
    method:"post",
    body:JSON.stringify(formtype),
    headers:{
      'Content-Type': "application/json"
    }
   })
   result=await result.json()
   console.warn(result);
   if(result)
   {
    alert("data saved successfully");
    setformtype({
      name:"",
      email:"",
      password:"",
      location:""
    })
   }
 }
}
  return(
    <div>
      <form onSubmit={submithandler}>
         <input 
         type="text"
         placeholder="Enter Name"
         name="name"
         onChange={changehandler}
         value={formtype.name}
         required/>

         <input 
         type="email"
         name="email"
         placeholder="Enter email"
         onChange={changehandler}
         value={formtype.email}
         required/>

         
         <input 
         type="password"
         name="password"
         placeholder="Enter password"
         onChange={changehandler}
         value={formtype.password}
         required/>


         <input 
         type="text"
         name="location"
         placeholder="Enter location"
         onChange={changehandler}
         value={formtype.location}
         required/>
         <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
