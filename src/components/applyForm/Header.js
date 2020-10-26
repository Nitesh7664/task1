import React, {useState, useEffect} from 'react'

import {fetchHeaderData} from '../API'
import styles from './Header.module.css'

function Header() {

   const [data, setData] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const fetchedData = await fetchHeaderData();
         setData(fetchedData)
      }

      fetchData();
   }, [JSON.stringify(data)])

   const formatDate = (_date) => {
      return (
         _date.substring(8, 10) + " " + _date.substring(4, 7) + " " + _date.substring(11)
      )
   }

   const displayData = JSON.stringify(data) != '{}'
   ?(
      <div className = {styles.section}> 
         <div className = {styles.title}>{data.job_title}</div>
   <div className = {styles.sub_title}>Posted: {formatDate(new Date(data.date).toDateString())} | Location: {data.location} | {data.job_type}</div>
      </div>
   ): null;

   

   return (
      <>
      {displayData}
      </>
   )
}

export default Header
