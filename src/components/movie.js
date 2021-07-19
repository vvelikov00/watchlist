import React, {useEffect, useState} from 'react'
import {Movieactors} from './movie-actors';
export const Movie = () => {
const element = localStorage.getItem('movie');
const movie = JSON.parse(element);
const [results, setResults] = useState([]);
var index = 1;
useEffect(() => {
    document.title = movie.name;
    fetch('https://api.tvmaze.com/shows/'+movie.id+'/cast')
    .then((res) => res.json())
        .then((jsonData) => {
        const result = jsonData.map(element => element.person)
         setResults(result);
        })
        .catch(err => 
            console.error(err))
                    // eslint-disable-next-line
 }, []);
    return (
        <div className="container">
             <div className="movie">
           <h1>{movie.name}</h1>
           {movie.image ? (
                <img className="movie-img" src={movie.image.medium} alt={movie.name}/>
                  
                ) : (
                    <div className="filler-posterm" style={{float:"left"}}></div>
                )}
                
                <p>Genres: {movie.genres.map(el =>  {return movie.genres.length > 1 && index < movie.genres.length ?
                (
                    index++,
                    el+", "
                ) : (
                    el
                )
                }  
                    
                    )}</p>
                <p>Rating: {movie.rating.average}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Premiered: {movie.premiered}</p>
                <p>Plot: </p>
                <p dangerouslySetInnerHTML = {{__html: (movie.summary)}}/>
                </div>
                <ul className="actor-results">
                                {results.map(element=>
                                    <li key={element.id}>
                                        <Movieactors element={element}/>
                                    </li>)}
                            </ul>
        </div>
        
    )
}