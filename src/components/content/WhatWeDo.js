import React from 'react'

import Title from './Title'
import SmallCard from './SmallCard'

import styles from './SmallCard.module.css'

function WhatWeDo({data}) {
   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <Title title = "What We Do" />
         <div className = {styles.container}>
         {data.map((_data, index) => <SmallCard data = {_data} key = {index}/>)}
         </div>
      </div>
   ):null
   return (
      <>
         {displayData}
      </>
   )
}

export default WhatWeDo
