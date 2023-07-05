import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";


export default function Nav(props){
    //props -->{onSearch: function}
    return(
          
     <div className={styles.nav}>
        <SearchBar onSearch={props.onSearch} />
        <Link to="/about">ABOUT</Link>
         <Link to="/home">HOME</Link>
     </div>
    );
}