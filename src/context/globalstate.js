import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    favourite: localStorage.getItem('favourite') ? JSON.parse(localStorage.getItem('favourite')) : []
    
};

export const  GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favourite', JSON.stringify(state.favourite))
    }, [state]);

    const addMovieToFavourite = (element) => {
        dispatch({type: "ADD_MOVIE_TO_FAVOURITE", payload: element});
    }

    const removeMovie = (id) => {
        dispatch({type: "REMOVE_MOVIE", payload: id})
    }

    return (
        <GlobalContext.Provider value={{favourite: state.favourite, addMovieToFavourite, removeMovie,}}>
            {props.children}
        </GlobalContext.Provider>
    )
}