
import React from 'react'
import {NavLink} from "react-router-dom"
const Home = () => {
    return (
        <>
    
        <nav>
            <div className="container1">Home</div>                 
            <div className="container1">Template</div>
            <div className="container1">Service</div>
            <button>Create a Design</button>
            <i id="hamburg" class="fas fa-bars"></i>
        </nav>
        <div className="main-container">
        <h1>What will you design</h1>
        <div className="input">
        <i id="search" class="fas fa-search"></i>
      
        <input type="text" placeholder="Search Your Content on Canva's"/>
        </div>
        <div className="icons-container">
         
        <div  className="link"> <NavLink className="navlink" to="/front">  <i id="icons"class="fas fa-poo-storm"></i></NavLink>
         <label>For You</label></div>
        <div  className="link"> <NavLink className="navlink" to="/presentation"> <i id="icons" class="far fa-file-powerpoint"></i></NavLink>
        <label >Presentations</label></div>
        <div  className="link"><NavLink className="navlink" to="/marketing"> <i id="icons" class="fas fa-bullhorn"></i></NavLink>
        <label>Marketing</label></div>
        <div  className="link"> <NavLink className="navlink" to="/social">  <i id="icons"class="fas fa-photo-video"></i></NavLink>
        <label>Social Media</label></div>
        <div className="link"> <NavLink className="navlink" to="/more"> <i id="icons" class="fas fa-comment-dots"></i></NavLink>
        <label>More</label></div>
        </div>
        </div>
       </>
    )
}

export default Home
