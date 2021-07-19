import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../context/globalstate';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import recyclebin from './recyclebin.png';
import dragndrop from './dragndrop.png';
export const Favourite = () => {
    const {favourite, removeMovie} = useContext(GlobalContext);
    useEffect(() => {
        document.title = "Favourite";
    }, []);

    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
        </div>
        <DragDropContext onDragEnd={(param)=>{
            var desI;
           if ( !param.destination)
           return
                console.log(param);
                    const srcI = param.source.index;
                     desI = param.destination.index;
                    favourite.splice(desI, 0, favourite.splice(srcI,1)[0]);
                    localStorage.setItem('favourite', JSON.stringify(favourite))
                 
                }}>
            {favourite.length > 0 ? (
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="movie-column" {...provided.droppableProps} ref={provided.innerRef}>    
                     {favourite.map((element, index) => {
                          return (
                               <Draggable key={element.id} draggableId={"dragable-"+element.id} index={index}>
                                {(provided) => (
 <li {...provided.draggableProps} ref={provided.innerRef}>
                                     
 <div className="movie-card">
<div className="overlay" onClick={ event =>  {window.location.href='/movie';  localStorage.setItem("movie", JSON.stringify(element))}} style={{cursor:"pointer"}}>

</div>
{element.image ? (
<img className="movie-img" src={element.image.medium} alt={element.name}/>

) : (
<div className="filler-poster"></div>
)}

<h3 className="title" >{element.name}</h3>
<h4 className="release-date">{element.premiered}</h4>
<div className="recycle-bin" onClick={() =>
    removeMovie(element.id)
}>
<img className="movie-icon" src={recyclebin} alt="recycle bin"/>
</div>
<div className="dragndrop" {...provided.dragHandleProps} >
<img className="movie-icon" src={dragndrop} alt="recycle bin"/>
</div>



</div>
        
  </li>
                                )}
                               
                                 </Draggable> 
                                 
                      )
                 }
            )}
            
              
                {provided.placeholder}        
               </ul>
                    )}
                       
               </Droppable>
          
            ) : (
                <h2 className="no-movies">No movies in your list!</h2>
            )}
           </DragDropContext>
        </div>
        </div>
    )
}