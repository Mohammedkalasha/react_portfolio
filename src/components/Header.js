import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
  <>
         <header className="bg-primary bg-gradient text-white " id='home'>
            <div className="container px-4 text-center">
                <h1 className="fw-bolder">Iam Mohammed kalasha</h1>
                <p className="lead">I am a Front-End / Full-Stack Developer.</p>
                
    
                <a className="btn btn-primary btn-lg" href='https://drive.google.com/file/d/1Yn8T3n6andmFQDohM8ZPd33UkTS5zDGJ/view?usp=sharing'>Resume</a>
            </div>
           
        </header>
  </>
  )
}

export default Header