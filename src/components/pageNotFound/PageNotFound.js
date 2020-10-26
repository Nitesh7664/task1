import React from 'react'

import styles from './PageNotFound.module.css'

function PageNotFound() {
   return (
      <div className = {styles.section}>
         <div className = {styles.title}>Oops!</div>
         <div className = {styles.sub_title}>We, are working on this page, it will be arriving shortly</div>
      </div>
   )
}

export default PageNotFound
