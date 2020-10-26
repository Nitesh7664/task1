import React from 'react'

import LargeCard from './LargeCard'
import styles from './CaseStudy.module.css'

function CaseStudy({data}) {

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <div className = {styles.title_container}>
            <div className = {styles.dash}></div>
            <div className = {styles.title}>Featured Case Studies</div>
         </div>
         <div className = {styles.container}>
            {
               data.map((_data, index) => <LargeCard key = {index}  data = {_data}/>)
            }
         </div>
      </div>
   ): null;

   return (
      <div>
         {displayData}
      </div>
   )
}

export default CaseStudy
