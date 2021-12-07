import React, { useState } from 'react'
import { responsive, Social } from './Object'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SocialMedia = () => {
    const [card, setCard] = useState(Social)
   const filtercard=(category)=>{
   const cardItem= card.filter((e)=>{
        return(e.category===category)  //filtering data based on  category facebook/insta
    })
    setCard(cardItem)
   }
    return (
        <div>
            <nav>
       
       <div className="navv" onClick={()=>filtercard('facebook')}>Facebook</div>
       <div className="navv" onClick={()=>filtercard('insta')}>Instagram</div>

            </nav>
                    
            <Carousel responsive={responsive}>       
           {
           card.map((elem)=>{
               return(                                      //based on categories
                   <>
                   <div className="homepage">
                       <img src={elem.image}/>
                       <h6>{elem.title}</h6>
                   </div>
                   </>
               )
           })
           }
           </Carousel>
        
           <div>
           <h4>Facebook</h4>
           <Carousel responsive={responsive}>
               {
         card.filter((e)=>
           {return(e.category=="facebook")}).map((elem)=>{
               return(
                   <>                                                
                   <div className="homepage">
                       <img src={elem.image}/>
                       <h6>{elem.title}</h6>
                   </div>
                   </>
               )
           })
           }
            </Carousel>
           <div>
               <h4>Instagram</h4>
            <Carousel responsive={responsive}>
           {
          card.filter((e)=>
           {return(e.category=="insta")}).map((elem)=>{                    //based on categories
               return(
                  
                   <>
                   <div className="homepage">
                       <img src={elem.image}/>
                       <h6>{elem.title}</h6>
                   </div>
                   </>
               )
           })
           }
         </Carousel>
          </div>
          
           </div>
        </div>
    )
}

export default SocialMedia
