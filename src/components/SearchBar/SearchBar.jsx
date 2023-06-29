import React from "react";
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
   return (
      <div className={styles.div}>
         <input className={styles.input} type='text' placeholder="Buscar personaje" />
         <button className={styles.btn} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;