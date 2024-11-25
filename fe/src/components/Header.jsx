import React from 'react'
import logo from '../assets/duskwalk-temp.png'


const Header = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center m-16">
            <img src={logo} alt="logo" className="w-[80%] max-w-[600px] h-auto object-contain sm:w-[100%] lg:max-w-[600px] mb-3" />
            <p className='text-2xl font-semibold sm:text-xl lg:text-3xl'>chart your path, complete your quest</p>
        </div>
    </div>
  )
}

export default Header