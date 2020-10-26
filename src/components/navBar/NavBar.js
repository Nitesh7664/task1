import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import {fetchNavData} from '../API'
import './navbar.css'


function NavBar() {
   const [navData, setNavData] = useState({})

   useEffect(() => {
      const fetchData = async () => {
         const fetchedData = await fetchNavData()
         setNavData(fetchedData)
      }
      fetchData()
   }, [JSON.stringify(navData)])

   const displayData = JSON.stringify(navData) != '{}'
   ?(
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark dark">
      <div className = "container">
         <a className="navbar-brand" href={navData.navbar_logo.logo_link.href}><img src={navData.navbar_logo.logo_image.url} alt={navData.navbar_logo.logo_link.title} className = "navbar-img"/></a>

         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to={navData.navbar_links.what_we_do.href} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     {navData.navbar_links.what_we_do.title}
                  </NavLink>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item bg-dark" to="#">DIGITAL TRANSFORMATION</NavLink>
                  <NavLink className="dropdown-item bg-dark" to="#">HEADLESS CMS STRATEGY AND IMPLEMENTATION</NavLink>
                  <NavLink className="dropdown-item bg-dark" to="#">CUSTOM MOBILE, WEB AND PRODUCT DEVELOPMENT</NavLink>
                  <NavLink className="dropdown-item bg-dark" to="#">DEVOPS AND CLOUD MANAGEMENT</NavLink>
               </div>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to={navData.navbar_links.our_work.href}>{navData.navbar_links.our_work.title}</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to={navData.navbar_links.who_we_are.href}>{navData.navbar_links.who_we_are.title}</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to={navData.navbar_links.blog.href}>{navData.navbar_links.blog.title}</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to={navData.navbar_links.services.href}>{navData.navbar_links.services.title}</NavLink>
               </li>
               <li className="nav-item btn btn-primary my-2 my-sm-0 button">
                  <NavLink className="nav-link" to={navData.navbar_links.contact_us.href}>{navData.navbar_links.contact_us.title}</NavLink>
               </li>
               
            </ul>
         </div>
      </div>
   </nav>
   ):null

   return (
      <>
      {displayData}
      </>
   )
}

export default NavBar
