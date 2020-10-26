import React, {useState, useEffect} from 'react'
import axios from 'axios'

import styles from './Form.module.css'

function Form() {
      const [resume, setResume] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [linkedIn, setLinkedIn] = useState("");
      const [github, setGithub] = useState("");
      const [blog, setBlog] = useState("");
      const [otherLinks, setOtherLinks] = useState("");
      const [aboutData, setAboutData] = useState("");
      const [errorMessage, setErrorMessage] = useState("Form Cannot be empty")

      const handleResume = (value) => setResume(value);
      const handleFirstName = (value) => setFirstName(value);
      const handleLastName = (value) => setLastName(value);
      const handleEmail = (value) => setEmail(value);
      const handlePhone = (value) => setPhone(value)
      const handleLinkedIn = (value) => setLinkedIn(value);
      const handleGithub = (value) => setGithub(value);
      const handleBlog = (value) => setBlog(value);
      const handleOtherLinks = (value) => setOtherLinks(value);
      const handleAboutData = (value) => setAboutData(value);


      const isValidEmail = (_email) => {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return (reg.test(email))
      }

      const isValid = () => {
         
         if(resume.length == 0 || resume.length > 500 || firstName.length <= 2 || firstName.length > 500 ||lastName.length <= 2 || lastName.length  > 250 || email.length == 0 || email.length > 500 || phone.length > 20 || linkedIn.length > 250 || github.length > 250 || blog.length > 250 || otherLinks.length > 250 ||aboutData > 500) {
            setErrorMessage("Please fill in the details correctly")
            return false;
         }

         if(!isValidEmail(email)){
            setErrorMessage("Please provide an Valid Email")
         }

         return true;
      }
      
      const handleSubmit = (e) => {
         e.preventDefault();

         if(isValid()){
            alert("Form submitted successfully")
         }else{
            alert(errorMessage)
            setErrorMessage("Fill in the Required details");
         }
      }


   return (
      <div className = {styles.section}>
         <form className = {styles.container} onSubmit = {(e) => handleSubmit(e)}>
            <div className = {styles.title}>Submit Your Application</div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="resume">Resume/CV<span className = {styles.red}>*</span></label>
               <input className = {styles.input_file} type="file" name="resume" id="resume" placeholder="Resume/CV" value = {resume} onChange = {(e) => handleResume(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="firstName">First Name<span className = {styles.red}>*</span> </label>
               <input className = {styles.input_text} type="text" name="firstName" id="firstName" value = {firstName} onChange = {(e) => handleFirstName(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="lastName">Last Name <span className = {styles.red}>*</span></label>
               <input className = {styles.input_text} type="text" name="lastName" id="lastName" value = {lastName} onChange = {(e) => handleLastName(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="email">Email<span className = {styles.red}>*</span></label>
               <input className = {styles.input_text} type="email" name="email" id="email" value = {email} onChange = {(e) => handleEmail(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="phone">Phone</label>
               <input className = {styles.input_text} type="number" name="phone" id="phone" value = {phone} onChange = {(e) => handlePhone(e.target.value)} />
            </div>
            <div className = {styles.title}>Social and other links</div>
            <div className = {styles.sub_title}>Help us understand you better by adding links</div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="linkedIn">LinkedIn</label>
               <input className = {styles.input_text} type="url" name="linkedIn" id="linkedIn" value = {linkedIn} onChange = {(e) => handleLinkedIn(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="gitHub">GitHub</label>
               <input className = {styles.input_text} type="url" name="gitHub" id="gitHub" value = {github} onChange = {(e) => handleGithub(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="blog">Blog</label>
               <input className = {styles.input_text} type="url" name="blog" id="blog" value = {blog} onChange = {(e) => handleBlog(e.target.value)} />
            </div>
            <div className = {styles.input}>
               <label className = {styles.label} htmlFor="otherLinks">Other Links</label>
               <input className = {styles.input_text} type="url" name="otherLinks" id="otherLinks" value = {otherLinks} onChange = {(e) => handleOtherLinks(e.target.value)} />
            </div>
            <div className = {styles.title}>Tell us a little about your self and what are you looking for</div>
            <textarea className = {styles.input_text_field} name="" id="" ></textarea>
            <input type="submit" className = {styles.button} value = "Submit Application" />
         </form>
      </div>
   )
}

export default Form
