import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card({
   name,
   species,
   onClose,
   gender,
   status,
   origin,
   image,
   id,
}) {
   


return (
      <div className={styles.div}>
         <button className={styles.btn} onClick={() => onClose(id)}>
          X
         </button>         
         <h2 className={styles.name}>{name}</h2>
         <h2 className={styles.data}>{species}</h2>
         <h2 className={styles.data}>{gender}</h2>   
         <h2 className={styles.data}>{status}</h2>
         <h2 className={styles.data}>{origin}</h2>
         <Link to={`/detail/${id}`} >
          <img className={styles.image} src={image} alt={name}/>
         </Link>
      </div>
   );
}