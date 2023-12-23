import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Student from './Student'
import Owl from './Owl'
function Home() {

  return (
    <>
    <div className="container">
      <Owl/>
    <div className="row">
      <div className="col-12"><h2>About us</h2></div>
      <div className="row">
         <div className="col-6">
      <p><b><b>Karkhana</b></b> <b>, established in 2069 B.S. is a social enterprise that focuses on giving students the right skills and attitude so that they can solve problems on their own and eventually build their own future. We strongly believe that makers today are the shapers of tomorrow. We closely work with school leaders, teachers and students to help us achieve our primary goals. We create learning kits(both curricular and co-curricular) for middle-school students to  teach them scientific concepts through ‘making’. This ‘making skill’ teaches children to be resourceful, reshape their own environment, solve novel problems, and makes them confident in the face of novel and unexpected problems. Our programs are designed to stimulate skills that will be relevant in the 21st Century, such as creativity, critical thinking, collaboration, risk-taking, and making skills in students. With our programs,  students will utilize STEAM (Science, Technology, Engineering, Arts & Design, Mathematics) to help solve the problems in their own lives and communities. In other words, our programs can help students make an impact in the world through STEAM.</b> </p>
      </div>
      <div className="col-6"><img style={{ width:"650px", height:"450px" }} src="https://karkhana.asia/wp-content/uploads/2023/06/Karkhana-768x456.jpg" alt="" /></div>
      </div>
     
    </div>
        <div className="row">
        <div className="col-12"><h2>Our Programs</h2></div>
          {Student.map((std)=>
          <div className="col-3">
          <div className="card">
               <div className="image"><img src={std.Photo}></img></div>
              <div className="Name">{std.Name}</div>
               <div className="Address">{std.Address}</div>
             <button><Link to={`/std_details/${std.id}`} >Know more</Link></button>
            </div>
          </div>
          )}
          </div>
        </div>
    </>
  )
}

export default Home