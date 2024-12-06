"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  // const getUser=async()=>{
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   console.log(data);
  // }
  // getUser();

  const [title,settitle]=useState('');
  const [desc,setdesc]=useState('');

  const [maintask , setmaintask]=useState([]);

  

  const submithandler=(e)=>{
    e.preventDefault();

    setmaintask([...maintask,{title,desc}])
      // console.log(title)
      // console.log(desc)
      settitle("");
      setdesc("");
      console.log(maintask)
  }

  const deleteHandler=(i)=>{
    let copytask=[...maintask];
    copytask.splice(i,1)
    setmaintask(copytask)

  }
   
  let renderTask = <h2>No Task Available</h2>
  if(maintask.length>0){
    renderTask=maintask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className=' flex items-center justify-between w-2/3 '>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>
      </div>
      <button className='bg-red-400 rounded px-4 py-2 text-white font-bold' onClick={()=>{
        deleteHandler(i)
      }}>Delete</button>
      </li>
  })
  }
  return (
    <>
    <h1 className='text-white text-3xl bg-black p-5 font-bold text-center'>
      Nayan's ToDoList
    </h1>

    <form onSubmit={submithandler}>

      <input type='text' className='border-zinc-800 border-2 m-5 px-4 py-2 text-2xl rounded' placeholder='Enter Title Here' value={title} onChange={(e)=>{
          settitle(e.target.value);    
      }}/>

      <input type='text' className='border-zinc-800 border-2 m-5 px-4 py-2 text-2xl rounded' placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setdesc(e.target.value);
      }}/>

      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'> Add Task</button>
      
    </form>
    <hr/>
    
    <div className='bg-slate-300 p-8'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
