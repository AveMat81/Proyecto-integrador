import React from "react";
import styles from "./Card.module.css"
 const Card = (props) => {
   return (
      <div className={styles.div}>
         <button className={styles.btn} onClick={props.onClose}>X</button>
         <img className={styles.image} src={props.image} alt={props.name} />
         <h2 className={styles.name}>{props.name}</h2>
         
         <div className={styles.div}>
         <h2 className={styles.data}>{props.status}</h2>
         <h2 className={styles.data}>{props.species}</h2>
         <h2 className={styles.data}>{props.gender}</h2>
         <h2 className={styles.data}>{props.origin}</h2>
         </div>
      </div>
   );
}

export default Card;