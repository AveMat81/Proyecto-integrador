import React from "react";
import styles from "./Card.module.css"

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
         
         <img
         className={styles.image}
         src={image}
         alt={name}
         />
         <h2 className={styles.name}>{name}</h2>
         
         <div className={styles.div}>
         <h2 className={styles.data}>{status}</h2>
         <h2 className={styles.data}>{species}</h2>
         <h2 className={styles.data}>{gender}</h2>
         <h2 className={styles.data}>{origin}</h2>
         </div>
      </div>
   );
}