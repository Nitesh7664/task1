import React from 'react'

import Title from './Title'
import Card from './Card'
import styles from './Works.module.css'

function Works({data}) {

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <Title title = "The Way We Work"/>
         <div className = {styles.container}>
            {
               data.map((_data, index) => <Card key = {index} data = {_data}/>)
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

export default Works
