import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Aryan | All right reserved.</p>
        <div className='flex gap-2.5'>
            <img width={35} src={assets.facebook_icon} alt="" 
            style={{cursor:"pointer"}}
            onClick={()=>{
              window.location.href="https://github.com/kumar-aryan-s"
            }}/>
        
            <img width={35} src={assets.instagram_icon} alt="" 
            style={{cursor:"pointer"}}
            onClick={()=>{
              window.location.href="https://www.instagram.com/kumar_aryan_s/?next=%2F"
            }}/>
        </div>
    </div>
  )
}

export default Footer