import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import Student from './Student'

function Details() {
    var {pro_id}=useParams()
    let pro_details = Student.find((pd)=>pd.id==pro_id)
  return (
    <>
    <div className="contain pb-5">
    <h1>{pro_details.Name}</h1>
    <h2>{pro_details.Address}</h2>
    <div className="row">
      <div className="col-8"><img src={pro_details.image}/></div>
      <div className="col-4">
         <b>Program Overview:</b><p>{pro_details.description}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Details