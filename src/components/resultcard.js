import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalstate';
import more from './more.png';
import star from './star.png';

export const Resultcard = ({element}) => {
   const { addMovieToFavourite, favourite} = useContext(GlobalContext);
   
   let storedMovie = favourite.find(o => o.id === element.id);
   const favDisabled = storedMovie ? true : false;
   
  
    return (
        <div className="result-card">
            <div className="poster-wrapper">

                

                {element.image ? (
                <img src={element.image.medium} alt={element.name}/>
                  
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{element.name}</h3>
                    <h4 className="release-date">{element.premiered}</h4>
                </div>

                    
                <div className="controls">
                    {element.url.indexOf("people") < 1 ? (
                        <div>
                            
                             <button className="fav-btn"
                    disabled={favDisabled}
                    onClick={() => addMovieToFavourite(element) }>
                        <img style={{width:"100%"}} src={star} alt={"add to favourite"}/>
                    </button>  
                    <button className="fav-btn" onClick={ event =>  {window.location.href='/movie';  localStorage.setItem("movie", JSON.stringify(element))}}>
                    <img style={{width:"90%"}} src={more} alt={"more"}/>
                        </button>
                            
                            </div>
                        
                    
                    ) : (
                        <button className="fav-btn" onClick={ event =>  {window.location.href='/actor';  localStorage.setItem("actor", JSON.stringify(element))}}>
                            <img style={{width:"100%"}} src={more} alt={"more"}/>
                        </button>
                        
                    )

                    }
                    
                </div>
            </div>
        </div>
    )
}
