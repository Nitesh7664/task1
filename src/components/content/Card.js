import React from 'react'

import styles from './Works.module.css'

function Card({data}) {
   return (
      <div className = {styles.card}>
         <div className = {styles.img_container}>
            <img src={data.image_url} alt={data.title}/>
         </div>
         <div className={styles.body}>
            {data.title}
         </div>
      </div>
   )
}

export default Card
