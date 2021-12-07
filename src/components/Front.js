import React from 'react'
import Carousel from 'react-multi-carousel';
import Api from './Api';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Object';

const Front = () => {
 
    return (
        
        <div className="container">
            <h4>Try Something New</h4>
        <Carousel responsive={responsive}>
            {Api.map((e)=>{
                return(<>
                <div className="homepage">
                    <img src={e.image}/>
                    <h6>{e.title}</h6>
                </div>
                </>)
            })}
              
        </Carousel>
          
      
     
        </div>
    )
}

export default Front