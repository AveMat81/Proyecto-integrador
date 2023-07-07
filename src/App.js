import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from './components/Navbar/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import axios from "axios"
import './App.css';


function App() {
   //la funcion onSearch va a devolver el array completo de characters agregandole un {} nuevo.
   //el parametro id llega de la funcion onSearch desde searchBar, que es el estado de searchBAr.
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters(
         characters.filter((pj) =>{
         return pj.id !== Number(id)
         })
      )   
   }
   //const array = useState([]) 
//const state = array[0]
//const setState  = array[1]                                    [state, setState]
//useState() ---> siempre devuelve un [1, 2]1=una var de state - 2=funcion que modifica ese var
const [characters, setCharacters] = useState([]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={< Home characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          {/* <Route path="/create" element={<Form />} /> */}
         </Routes>
         
         </div>
   );
}

export default App;
