import React, {useState, useEffect} from 'react'

import {fetchFooterData} from '../API'
import styles from './Footer.module.css'

function Footer() {

   const [data, setData] = useState({})

   useEffect(() => {
      const fetchData = async () => {
         const fetchedData = await fetchFooterData()
         filterData(fetchedData)
      }

      fetchData()
   }, [JSON.stringify(data)])

   const filterData = (rawData) => {
      const {contact, social_media, copyright_text, footer_body} = rawData;
      setData({
         contact: contact,
         social_media: social_media,
         copyright_text: copyright_text,
         title: footer_body
      })
   }

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}>
         <div className = {styles.container}>
   <div className = {styles.title}>{data.title}</div>
   <a className = {styles.contact} href = {data.contact.href}>{data.contact.title}</a>
   <div className = {styles.lower_container}>
   <div className = {styles.copyright}>Copyright &#169; {data.copyright_text}</div>
   <div className = {styles.social_media}>
      <a className = {styles.social_media_link} href = {data.social_media['facebook'].href}>
      <i className = "fab fa-facebook-f"></i>
      </a> 
      <a className = {styles.social_media_link} href = {data.social_media['linked_in'].href}>
      <i className = "fab fa-linkedin-in"></i>
      </a>
      <a className = {styles.social_media_link} href = {data.social_media['twitter'].href}>
      <i className = "fab fa-twitter"></i>
      </a>
   </div>
   
   </div>
         </div>
      </div>
   ): null

   return (
      <>
         {displayData}
      </>
   )
}

export default Footer

