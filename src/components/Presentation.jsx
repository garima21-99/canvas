import React from 'react'
import Api from './Api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Object';
const Presentation = () => {
    
    return (
        <>
             
     <Carousel responsive={responsive}>         
        {Api.map((elem)=>{
            return(
                <>
                <div className="homepage">
                <img src={elem.image}/>
                <h6>{elem.title}</h6>
                </div>
                </>
            )
        }).reverse()}
        
        </Carousel>
            
        </>
    )
}

export default Presentation
