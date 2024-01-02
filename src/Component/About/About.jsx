import React from 'react'
import style from './style.module.css'
export default function About() {
  return (
    <div className={style.About}>
      <h2 className='text-center pt-4'>ABOUT</h2>
      <div className='parent m-auto text-center position-relative w-25 mt-2 mb-3'>
      <div className={style.lain1}></div>
      <i className="fa-solid fa-star text-white fs-4 mt-1"></i>
      <div className={style.lain2}></div>
      </div>
      <div className='container-fluid mt-4 pb-4'>
        <div className="row text-white mb-4 pt-2">
        <div className="offset-2 col-md-4 ">
          <p className='lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-4">
          <p className='lead'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
        </div>
        
      </div>
    
    </div>
  )
}
