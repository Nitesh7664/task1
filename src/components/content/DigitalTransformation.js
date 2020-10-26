import React from 'react'

import Title from './Title'

import styles from './DigitalTransformation.module.css'

function DigitalTransformation({data}) {

   const displayData = JSON.stringify(data) != '{}'? 
   (
   <div className = {styles.section}>
      <Title title={data.digital_title} />
      <p className={styles.para}>{data.digital_body}</p>
      <p className={styles.para}>{data.secondary_text}</p>
   </div>
   ):null
   return (
      <>
         {displayData}  
      </>
   )
}

export default DigitalTransformation
