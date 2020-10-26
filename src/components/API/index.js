import axios from 'axios'
require('dotenv').config();

export const fetchServicesData = async () => {
   const fetchedData = await axios.get(`https://cdn.contentstack.io/v3/content_types/services/entries/${process.env.REACT_APP_API_KEY_SERVICES}?environment=${process.env.REACT_APP_ENVIRONMENT}`, {
      headers: {
         "api_key": `${process.env.REACT_APP_API_KEY}`,
         "access_token": `${process.env.REACT_APP_AUTH_TOKEN}`
      }
   })
   return fetchedData.data.entry;

}

export const fetchHeaderData = async () => {
   const fetchedData = await axios.get(`https://cdn.contentstack.io/v3/content_types/apply_form/entries/${process.env.REACT_APP_API_KEY_HEADER}?environment=${process.env.REACT_APP_ENVIRONMENT}`, {
      headers: {
         "api_key": `${process.env.REACT_APP_API_KEY}`,
         "access_token": `${process.env.REACT_APP_AUTH_TOKEN}`
      }
   })

   return fetchedData.data.entry.values;
}

export const fetchNavData = async () => {
   const fetchedData = await axios.get(`https://cdn.contentstack.io/v3/content_types/navbar_nitesh/entries/${process.env.REACT_APP_API_KEY_NAVBAR}?environment=${process.env.REACT_APP_ENVIRONMENT}`, {
      headers: {
         "api_key": `${process.env.REACT_APP_API_KEY}`,
         "access_token": `${process.env.REACT_APP_AUTH_TOKEN}`
      }
   })

   return fetchedData.data.entry.navbar_data;   
}

export const fetchFooterData = async () => {
   const fetchedData = await axios.get(`https://cdn.contentstack.io/v3/content_types/footer_nitesh/entries/${process.env.REACT_APP_API_KEY_FOOTER}?environment=${process.env.REACT_APP_ENVIRONMENT}`, {
      headers: {
         "api_key": `${process.env.REACT_APP_API_KEY}`,
         "access_token": `${process.env.REACT_APP_AUTH_TOKEN}`
      }
   })
   return fetchedData.data.entry;
}