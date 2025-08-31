import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function StudentDashboard(){
  const [lessons,setLessons] = useState([])
  useEffect(()=>{ axios.get('/api/lessons').then(r=>setLessons(r.data)).catch(()=>{}) },[])
  return (<div style={{padding:20}}><h1>Student Dashboard</h1>{lessons.map(l=>(<div key={l._id}><h2>{l.title}</h2><p>Level: {l.level}</p></div>))}</div>)
}