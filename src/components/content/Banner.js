import React from 'react'

import styles from './Banner.module.css'

function Banner({data}) {

   const displayData = JSON.stringify(data) != "{}"
   ?(
      <div className = {styles.section}>
         <div className = {styles.upper}></div>
         <div className = {styles.lower}></div>
         <div className = {styles.img_container}>
            <img className = {styles.img} src={data.banner_img.url} alt={data.banner_title}/>
         </div>
         <div className = {styles.banner_title}>{data.banner_text}</div>
      </div>
   ): null;

   return (
      <>
      {displayData}
      </>
   )
}

export default Banner
