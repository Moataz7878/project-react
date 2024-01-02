import React, { useState } from 'react'
import style from './style.module.css'
import { getValue } from '@testing-library/user-event/dist/utils'
import { getByDisplayValue } from '@testing-library/react'
//40
export default function Contact() {
let [user ,setUser ] =useState({
  name:'',
  email:'',
  phone:'',
  message:''
})
function from(e){
let myuser ={...user}
myuser[e.target.name]=e.target.value
setUser(myuser)
}
  return (
    <div className={style.Contact}>
      <h2 className='text-center fw-bold pt-4'>CONTACT ME</h2>
      <div className='parent m-auto text-center position-relative w-25 mt-2 mb-3 '>
      <div className={style.lain1}></div>
      <i className="fa-solid fa-star  fs-4 mt-1"></i>
      <div className={style.lain2}></div>
      </div>
      <div className="from w-50 m-auto  mt-4 pb-4 ">
        {user.name==''? <h3 className='mb-0  '>*</h3>: <h6 className='ps-2 pt-3'>*Name</h6>}
        <input onChange={from} type="text" name='name' placeholder='Name' className='form-control  w-100 p-3'  />
        {user.email== '' ?<h3 className='mb-0  '>*</h3>: <h6 className='ps-2 mt-4'>*Email address</h6>}
        <input  onChange={from} type="text" name='email' placeholder='email address' className="form-control w-100 p-3 "/>
        {user.phone==''?<h3 className='mb-0  '>*</h3>: <h6 className='ps-2 mt-4'>*phone Number</h6>}
        <input onChange={from} type="number" name='phone' placeholder='phone Number'  className="form-control w-100 p-3 " />
        {user.message==''?<h3 className='mb-0  ' >*</h3>:<h6 className='ps-2 mt-4 '>*Message</h6>}
        <textarea onChange={from}  className={`${style.form} form-control w-100  mb-4  `} placeholder=" Enter Message" id="example"rows="5" name='message'></textarea>
        <button  className="btn btn-success btn-xl mt-3 ms-2 " id="sendMessageButton" type="submit">Send</button>

      </div>
    </div>
  )
}
