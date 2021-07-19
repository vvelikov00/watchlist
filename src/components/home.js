import React, {useEffect} from 'react'
import tv from './tv.jpg';

export const Home = () => {

    useEffect(() => {
        document.title = "Home"
     }, []);
    return (
      
       <div style={{backgroundColor:"black"}}>
           <img style={{width:"100%", height:"92vh"  ,objectFit:"cover",  objectPosition:"0% 20%",  opacity:"0.4"}} src={tv} alt="tv"/>
           
        </div>
    )
}
