import React from 'react'
import style from './style.module.css'
import img from '../img/download-removebg-preview.png'
export default function Home() {

  return (
<div className={style.Home}>
  <div className="parent w-25 text-center  pt-4  mt-4 m-auto">
    <img src={img} className='mt-4 w-50' alt="fail" />
    <h2>START REACT</h2>
    <div className='parent m-auto text-center  position-relative w-100 mt-4 pb-3'>
      <div className={style.lain1}></div>
      <i className="fa-solid fa-star text-white fs-4 mt-1"></i>
      <div className={style.lain2}></div>
      </div>
      <h5 className='text-white fw-bold  mt-4 pt-4 mb-4 pb-4'>Graphic Artist - Web Designer - Illustrator</h5>
  </div>
</div>
      
  )
}
