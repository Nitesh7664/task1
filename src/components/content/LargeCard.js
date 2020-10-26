import React from 'react'

import styles from './CaseStudy.module.css'


function LargeCard({data}) {
   return (
            <div className = {styles.large_card}>
               <div className = {styles.large_img_container}>
                  <img className = {styles.large_img} src={data.imageUrl} alt={data.title}/>
               </div>
               <div className = {styles.text_container}>
                  <div className = {styles.large_title}>{data.category}</div>
                  <div className = {styles.large_main_title}>{data.title}</div>
                  <div className = {styles.view_more}>
                     <a className = {styles.link} href={data.url}>View more <i className = "fas fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
   )
}

export default LargeCard
