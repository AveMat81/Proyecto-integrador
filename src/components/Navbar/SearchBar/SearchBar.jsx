import React, { useState} from "react";
import styles from './SearchBar.module.css';



const SearchBar = (props) => {

   const [id, setId] = useState("")

function handledChange(evento){
   setId(evento.target.value)
}

   return (
      <div className={styles.div}>
         <input 
            className={styles.input} 
            type='text' 
            placeholder="Buscar un personaje..." 
            onChange={handledChange}
            value={id}
         />
         <button
            className={styles.btn}
            onClick={() => {
             props.onSearch(id);
            }}
         >
            Agregar
         </button>
      </div>
   );
}

export default SearchBar;