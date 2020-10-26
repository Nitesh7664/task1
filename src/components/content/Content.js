import React, {useState, useEffect} from 'react'

import {fetchServicesData} from '../API'
import Banner from './Banner'
import DigitalTransformation from './DigitalTransformation'
import WhatWeDo from './WhatWeDo'
import Quote from './Quote'
import Works from './Works'
import Technologies from './Technologies'
import CaseStudy from './CaseStudy'

function Content() {
   const [data, setData] = useState({});
   const [banner, setBanner] = useState({});
   const [digitalTransformation, setDigitalTranformation] = useState({});
   const [featuredCaseStudies, setFeaturedCaseStudies] = useState({});
   const [quote, setQuote] = useState({});
   const [technologies, setTechnologies] = useState({});
   const [works, setWorks] = useState({});
   const [whatWeDo, setWhatweDo] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const fetchedData = await fetchServicesData();
         setAllState(fetchedData);
      }

      fetchData();
   }, [JSON.stringify(data)])

   const setAllState = (rawData) => {
      const bannerData = rawData.banner

      const digitalTransformationData = rawData.digital_transformation

      const featuredCaseStudiesData = Object.keys(rawData.featured_case_studies).map(key => {
         return {
            title: rawData.featured_case_studies[key].body.title,
            url: rawData.featured_case_studies[key].body.href,
            imageUrl: rawData.featured_case_studies[key].image.url,
            category: rawData.featured_case_studies[key].category
         }
      })

      const quoteData = rawData.quote

      rawData.technologies.body = rawData.technologies.body.image1.map(imgData => imgData.url)
      const technologiesData = rawData.technologies

      const worksData = Object.keys(rawData.the_way_we_work).map(key => {
         return {
            image_url: rawData.the_way_we_work[key].image.url,
            title: rawData.the_way_we_work[key].title
         }
      })

      const whatWeDoData = Object.keys(rawData.what_we_do).map(key => {
         return {
            image_url: rawData.what_we_do[key].image.url,
            title: rawData.what_we_do[key].text
         }
      })

      setBanner(bannerData)
      setDigitalTranformation(digitalTransformationData)
      setFeaturedCaseStudies(featuredCaseStudiesData)
      setQuote(quoteData)
      setTechnologies(technologiesData)
      setWorks(worksData)
      setWhatweDo(whatWeDoData)
      setData(rawData)
   }

   return (
      <div>
         <Banner data = {banner} />
         <DigitalTransformation data = {digitalTransformation} />
         <WhatWeDo data = {whatWeDo} />
         <Quote data = {quote} />
         <Works data = {works} />
         <Technologies data = {technologies} />
         <CaseStudy data = {featuredCaseStudies} />
      </div>
   )
}

export default Content
