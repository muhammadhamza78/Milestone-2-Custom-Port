import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Contact Us</h2>
            <p className='text-grey-600 text-[10px] pt-2'>
                Drop any text for details
            </p>
            <div className='flex gap-3 items-center'>
                <IoMailUnreadOutline size={30}/> itshamzaaslam@gmail.com
            </div>
            <div className='flex gap-3 items-center'>
                <FaPhone size={30}/>03352433455
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
