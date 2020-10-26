import React from 'react'

import styles from './Quote.module.css'

function Quote({data}) {

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <div className = {styles.container}>
            <p className = {styles.quote}><i className ="fas fa-quote-left"></i></p>
   <p className = {styles.quote_body}>{data.quote_body}</p>
            <div className = {styles.quote_img_container}>
               <img className = {styles.quote_img} src={data.image.url} alt={data.written_by}/>
            </div>
   <p className = {styles.written_by}>{data.written_by}</p>
   <p className = {styles.company}>{data.company_name}</p>
         </div>
      </div>
   ): null;

   return (
      <>
         {displayData}
      </>
   )
}

export default Quote
