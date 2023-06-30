import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav(props){
    //props -->{onSearch: function}
    return( 
     <div className={style.div}>
        <SearchBar onSearch={props.onSearch} />
     </div>
    );
}