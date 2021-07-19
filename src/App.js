import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/header';
import {Home} from './components/home';
import {Favourite} from './components/favourite';
import {Add} from './components/add';
import {Actor} from './components/actor';
import {Movie} from './components/movie';
import './App.css';
import {GlobalProvider} from './context/globalstate';

function App() {
  return (
    <GlobalProvider>
   <Router>
     <Header/>

     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/favourite">
         <Favourite/>
       </Route>
       <Route path="/add">
         <Add/>  
       </Route>
       <Route path="/actor">
         <Actor/>  
       </Route>
       <Route path="/movie">
         <Movie/>  
       </Route>
     </Switch>

   </Router>
   </GlobalProvider>
  );
}

export default App;
