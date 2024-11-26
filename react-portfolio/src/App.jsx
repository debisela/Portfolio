import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Github_Linkedin_links from './components/Github_Linkedin_links'
import Resume_download from './components/Resume_download'
import ProjectsList from './components/ProjectList'
import Contact_form from './components/Contact_form'
import './App.css'

function App() {


  return (
    <>
    <div className="app">
     <Header/>
     <About/>
     <Skills/>
     <Education/>
     <Github_Linkedin_links/>
     <Resume_download/>
     <ProjectsList/>
     <Contact_form/>
     <footer className="footer">
      <p>© 2024 Debi Sela. All Rights Reserved.</p>
    </footer>
     </div>
    </>
  )
}

export default App
