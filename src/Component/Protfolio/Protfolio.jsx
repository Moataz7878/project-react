import React, { useState } from 'react'
import style from './style.module.css'
import imgOne from '../img/1.jpg'
import imgTwo from '../img/2.jpg'
import imgThree from '../img/3.jpg'
import imgFour from '../img/4.jpg'
import imgFive from '../img/5.jpg'
import imgSix from '../img/6.jpg'
export default function Protfolio() {
  
  let[img ,setImg]=useState('')
  function images(index){
setImg(index)
  }
  function closeimges(){
setImg('')
  }
 
  return <>
    <div className={style.Protfolio}>
    <h2 className='text-center pt-3'>PROTFOLIO</h2>
    <div className='parent m-auto text-center position-relative w-25  mt-2 mb-3'>
      <div className={style.lain1}></div>
      <i className="fa-solid fa-star  fs-4 mt-1"></i>
      <div className={style.lain2}></div>
      </div>
      <div className='container mb-4 mt-4'>
        <div className="row g-4 mb-3 pb-4">
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgOne} className='w-100' alt="" />
              <div onClick={()=> images(imgOne)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgTwo} className='w-100' alt="" />
              <div onClick={()=> images(imgTwo)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgThree} className='w-100' alt="" />
              <div onClick={()=> images(imgThree)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgFour} className='w-100' alt="" />
              <div onClick={()=> images(imgFour)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgFive} className='w-100' alt="" />
              <div onClick={()=> images(imgFive)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.child}>
              <img src={imgSix} className='w-100' alt="" />
              <div onClick={()=> images(imgSix)} className={style.hovers}>
              <i class="fa-solid fa-plus "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{img ==''?'':  <div className={style.parents}>
  <div className={style.childImg}>
    <h2 className='mt-3'>LOG CABIN</h2>
    <div className={style.icon}>
    <i onClick={closeimges} class="fa-solid fa-xmark"></i>
    </div>
    <div className='parent m-auto text-center position-relative w-25   mt-1 mb-3'>
      <div className={style.lain1}></div>
      <i className="fa-solid fa-star  fs-4 mt-1"></i>
      <div className={style.lain2}></div>
      </div>
      <img className='w-50 mt-2' src={img} alt="" />
      <div className='w-50 m-auto'>
      <p className='pt-1 pb-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>

      </div>
      <button onClick={closeimges} type="button" class="btn btn-danger mb-2 p-2"> close window</button>
    </div>
  </div>}
    </>
}
