import React from 'react'

import Title from './Title'
import styles from './Technologies.module.css'

function Technologies({data}) {

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <Title title = {data.title}/>
         <p className = {styles.description}>{data.description}</p>
         <div className = {styles.container}>
            {
               data.body.map((_url, index) => {
                  return (
                     <div key = {index} className = {styles.tech_img_container}>
                        <img className = {styles.tech_img} src={_url} alt="technologies"/>
                     </div>
                  )
               })
            }
         </div>
      </div>
   ):null

   return (
      <div>
         {displayData}
      </div>
   )
}

export default Technologies
