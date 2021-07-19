import React, {useState, useEffect} from 'react'
import {Resultcard} from './resultcard';



export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searchby, setSearchBy] = useState("title");
    var prev = 0;
     const handleSelect = s => {
         setSearchBy(s.target.value);
         setQuery("");
         setResults([]);
     }

     useEffect(() => {
        document.title = "Search"

     }, []);

    const onChange = e => {
       e.preventDefault(); 
       setQuery(e.target.value);

       if(searchby === "title") {
        fetch("https://api.tvmaze.com/search/shows?q="+e.target.value)
        .then((res) => res.json())
        .then((jsonData) => {
        const result = jsonData.map(element => element.show)
         setResults(result);
        })
        .catch(err => 
            console.error(err))
            
       } else if (searchby === "actor") {
        fetch("https://api.tvmaze.com/search/people?q="+e.target.value)
        .then((res) => res.json())
        .then((jsonData) => {
        const result = jsonData.map(element => element.person)
         setResults(result);
        })
        .catch(err => 
            console.error(err))

       } else if (searchby === "date") {
          if (query.length > 8)  {
                            fetch("https://api.tvmaze.com/schedule/web?date="+e.target.value)
        .then((res) => res.json())
        .then((jsonData) => {
        const result = jsonData.map(element => element._embedded.show)
         setResults(result);
        })
        .catch(err => 
            console.error(err))
          }

        } 
       
    }

    const onFocus =() => {
        const element = Array.from(document.getElementsByClassName("input-wrapper"));
        // eslint-disable-next-line
        element.map(element => {
            element.style.boxShadow ="0 10px 10px rgb(0 0 0 / 0.2)";
        }
            )
    }

    const onBlur = () => {
        const element = Array.from(document.getElementsByClassName("input-wrapper"));
       // eslint-disable-next-line
        element.map(element => {
            
            element.style.boxShadow ="";
        }
            )
    }

    const clearQuery = (e) => {
        if (e.keyCode === 8 && searchby === "date" && query.length < 11) {
            setResults([]);            
        }
        
    }

    return (
        <div className="search-page">
            <div className="container">
                <div className="search-content">
                    <div className="input-wrapper">
                        <select name="search-by" className="search-by" onChange={handleSelect} onFocus={onFocus}
                        onBlur={onBlur}>
                        <option value="title">Title</option>
                        <option value="actor">Actor</option>
                        <option value="date">Date</option>
                        </select>
                        <input type="text" className="in"
                        placeholder="Search"
                        value={query}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyDown={clearQuery}
                        />
                    </div>
                    {searchby === "date" && query.length < 10 ? (
                        <div> 
                        <p style={{color:"red", textAlign:"center"}}>YYYY-MM-DD</p>
                        <p style={{textAlign:"center", fontStyle:"italic"}}>The web schedule is a complete list of episodes that air on web/streaming channels on a given date.</p>
                        </div>

                    ) : (
                        undefined
                    )

                    }
                    
                    
                            <ul className="results">
                                {results.map(element=>
                                searchby !== "date" ? (
                                    <li key={element.id}>
                                            <Resultcard element={element}/>
                                    </li>
                                ) : (
                                    element.id !== prev  ? (
                                   prev = element.id,
                                   <li key={element.id}> 
                                            <Resultcard element={element}/>
                                    </li>
                                    )  : (
                                        undefined
                                    )

                                    
                                )
                                    
                                    
                                )}
                            </ul>
                        
                    
                    

                </div>
            </div>
        </div>
    )
}
