import React, {useEffect, useState} from 'react'
import {Actormovies} from './actor_movies';
export const Actor = () => {
const element = localStorage.getItem('actor');
const actor = JSON.parse(element);
const [results, setResults] = useState([]);



useEffect(() => {
    document.title = actor.name
    
    fetch('https://api.tvmaze.com/people/'+actor.id+'/castcredits?embed=show')
    .then((res) => res.json())
        .then((jsonData) => {
        const result = jsonData.map(element => element._embedded.show)
         setResults(result);
        })
        .catch(err => 
            console.error(err))
             // eslint-disable-next-line
 }, []);
    return (
        <div className="container">
            <div className="actor">
           <h1>{actor.name}</h1>
           {actor.image ? (
                <img className="movie-img" src={actor.image.medium} alt={actor.name}/>
                  
                ) : (
                    <div className="filler-posterm" style={{float:"left"}}></div>
                )}
                <p>Birthday: {actor.birthday}</p>
                <p>Country: {actor.country ? (actor.country.name) : (undefined)}</p>
                <p>Gender: {actor.gender}</p>
                </div>
                <ul className="actor-results">
                    
                                {results.map(element=>
                                    <li key={element.id}>
                                        <Actormovies element={element}/>
                                    </li>)}
                            </ul>
        </div>
        
    )
}
