import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Navbar/Nav';
import axios from "axios"

function App() {
   //la funcion onSearch va a devolver el array completo de characters agregandole un {} nuevo.
   //el parametro id llega de la funcion onSearch desde searchBar, que es el estado de searchBAr.
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
//const setState = array[1]                                    [state, setState]
//useState() ---> siempre devuelve un [1, 2]1=una var de state - 2=funcion que modifica ese var
const [characters, setCharacters] = useState([]);

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
