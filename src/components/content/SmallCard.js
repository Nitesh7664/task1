import React from 'react'

import styles from './SmallCard.module.css'

function SmallCard({data}) {

   return (
      <div className = {styles.card}>
         <div className = {styles.img_container}>
            <img src={data.image_url} alt={data.title}/>
         </div>
         <div className = {styles.info_container}>
            {data.title}
         </div>
      </div>
   )
}

export default SmallCard
