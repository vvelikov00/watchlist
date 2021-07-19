import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalstate';


export const Actormovies = ({element}) => {
   const { addMovieToFavourite, favourite} = useContext(GlobalContext);

   
   let storedMovie = favourite.find(o => o.id === element.id);

   const favDisabled = storedMovie ? true : false;
   
  
    return (
        <div className="actor-movies">
            <div className="poster-wrapper" onClick={ event =>  {window.location.href='/movie';  localStorage.setItem("movie", JSON.stringify(element))}} style={{cursor:"pointer"}}>

                

                {element.image ? (
                <img src={element.image.medium} alt={element.name} />
                  
                ) : (
                    <div className="filler-posterm"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title" onClick={ event =>  {window.location.href='/movie';  localStorage.setItem("movie", JSON.stringify(element))}} style={{cursor:"pointer"}}>{element.name}</h3>
                    <h4 className="release-date">{element.premiered}</h4>
                </div>

                    
                <div className="controls">
                    
                             <button className="fav-btn"
                    disabled={favDisabled}
                    onClick={() => addMovieToFavourite(element)}>
                        <i className="star"></i> 
                    </button>  
                   
                            
                            
                        
                   
                    
                    
                </div>
            </div>
        </div>
    )
}
