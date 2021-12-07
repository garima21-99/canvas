import React from 'react'
import { marketing } from './Object'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './Object';
import { useState } from 'react/cjs/react.development';

const Marketing = () => {
  const [item, setItem] = useState(marketing)       //usestate for setting items with and without filter
  const filteritem=(category)=>{
  const updateItems=   marketing.filter((e)=>{return(e.category===category)}) //filtering data based on facebook/insta
   setItem(updateItems)
  }
    return (
       
        <div>
            <nav>
        
       <div className="navv"onClick={()=>filteritem('onlineadd')}>Online Add</div>
       <div className="navv" onClick={()=>filteritem('printadd')} >Print Add</div>


            </nav>
                 
            <Carousel responsive={responsive}>            
            {
              item.map((e)=>{
                    return(                                     //based on categories
                        <>
                        <div className="homepage">
                            <img src={e.image}/>
                            <h6>{e.title}</h6>
                        </div>
                        </>
                    )
                })
            }</Carousel>
          <div>
              <h4>Online Add</h4>
              <Carousel responsive={responsive}>
          {                                                            //based on categories
              item.filter((e)=>{
                   return(e.category=="onlineadd")
               }).map((e)=>{
                    return(
                        <>
                        <div className="homepage">
                            <img src={e.image}/>
                            <h6>{e.title}</h6>
                        </div>
                        </>
                    )
                })
            }
            </Carousel>
            </div>   
            <div>
                <h4>Print Add</h4>
                <Carousel responsive={responsive}>
          {
           item.filter((e)=>{
                   return(e.category=="printadd")
               }).map((e)=>{                                       //based on categories
                    return(
                        <>
                        <div className="homepage">
                            <img src={e.image}/>
                            <h6>{e.title}</h6>
                        </div>
                        </>
                    )
                })
            }
            </Carousel>
            </div>    
        </div>
       
      
    )
}

export default Marketing
