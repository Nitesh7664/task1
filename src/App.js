import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NavBar from './components/navBar/NavBar'
import Content from './components/content/Content'
import Contact from './components/applyForm/Contact'
import PageNotFound from './components/pageNotFound/PageNotFound'
import Footer from './components/footer/Footer'

function App() {
   return (
      <div>
         <NavBar />
         <Switch>
            <Route exact path = "/services" component = {Content} />
            <Route path = "/contact" component = {Contact} />
            <Route component = {PageNotFound} />
         </Switch>
         <Footer />
      </div>
   )
}

export default App
