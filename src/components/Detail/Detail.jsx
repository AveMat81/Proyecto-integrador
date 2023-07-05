import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Detail(){

//useParams() devuelve los parametros dinamicos (eso que son asi por ej :id, los dos puntos marcan que son dinamicos).
// devuelve un objeto el nombre d ela propiedad es como lo llamamos en donde hacemos el path='/detail/:id', en este caso esta en App.js.
//Y si lo desestructuramos como aca abjo se guarda el valor en id
const { id } = useParams();

const [character, setCharacter] = useState({}) 
//useEffecte() sirve para simular el ciclo de vida
useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
     (respuesta) => {
        if (respuesta.data.name) {
          setCharacter(respuesta.data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
     }
   ).catch(eer => window.alert("Error"));
 
   //desmontaje
      return () => {
      // se ejecuta cuando se desmonta
      // console.log("desmontaje")
     };
}, [id]);


    return(
     <div>
      <h3>{character.name && character.name}</h3> 
      {/* <h5>{character.status ? character.status : "No hay status!"}</h5> */}
      <h5><span>Origini:</span></h5>
      <img src={character.image} alt={character.name} />
      <section>
        <span>Species: {character.species}</span>
        {/* <span>Gender: {character.gender}</span> */}
        {/* <span>Origini: {character.origin.name}</span>  ESTA LINEA ME ROMPE EL CODIGO*/} 
      </section> 
     </div>
    )
};