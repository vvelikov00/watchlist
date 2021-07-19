import React from 'react';



export const Movieactors = ({element}) => {
  
    return (
        <div className="actor-movies">
            <div className="poster-wrapper" onClick={ event =>  {window.location.href='/actor';  localStorage.setItem("actor", JSON.stringify(element))}} style={{cursor:"pointer"}}>

                

                {element.image ? (
                <img src={element.image.medium} alt={element.name} />
                  
                ) : (
                    <div className="filler-posterm"></div>
                )}
            </div>

            <div className="info" >
                <div className="header">
                    <h3 className="title" onClick={ event =>  {window.location.href='/actor';  localStorage.setItem("actor", JSON.stringify(element))}} style={{cursor:"pointer"}}>{element.name}</h3>
                    
                </div>

                    
                
            </div>
        </div>
    )
}
