import logo from '../assets/logo.jpg'
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-[100%] fixed  flex justify-between items-center bg-gradient-to-r from-gray-950 to-gray-800 top-0 left-0 p-8'>
        <div className='lg:w-[100%] flex justify-start items-center gap-2'>
          <div className=''>
            <img className='w-[50px] h-[30px] rounded-l-[50%] rounded-tr-[50%]' src={logo} alt="Logo"/>
          </div>
          <div>
            <h1 className='text-xl lg:text-3xl md:text-2xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-serif font-bold uppercase'><span className='text-green-800'>c</span>o-Bank</h1>
          </div>
        </div>
        {/*link to laptop */}
        <div className='lg:w-[100%]'>
          <ul className='w-[100%] hidden md:flex justify-center items-center gap-6'>
            <li className='hover:text-green-300 scale-105 duration-300'><a href="#">Home</a></li>
            <li className='hover:text-green-300 scale-105 duration-300'><a href="#">Features</a></li>
            <li className='hover:text-green-300 scale-105 duration-300'><a href="#" >Product</a></li>
            <li className='hover:text-green-300 scale-105 duration-300'><a href="#">Clients</a></li>
          </ul>
        </div>
        <div className='md:hidden'>
            <AiOutlineBars size={25} className='cursor-pointer' onClick={() => setOpen(true)}/>
        </div>

        {/*link  to mobile devices */}
        {open && (
          <div className='md:hidden absolute right-0 left-0 top-0 w-full p-3 h-[500px] bg-black/80'>
            <div className='absolute left-0'>
            <AiOutlineClose size={25} className='font-semibold cursor-pointer' onClick={() => setOpen(false)}/>
            </div>
          <ul className='w-[100%]  flex flex-col p-5 gap-6 mt-5'>
            <li className= 'border-[1px] w-full rounded border-gray-400 p-1 hover:scale-105 duration-300 hover:text-green-400' onClick={() => setOpen(false)}><a href="#">Home</a></li>
            <li className='border-[1px] w-full rounded border-gray-400 p-1 hover:scale-105 duration-300 hover:text-green-400' onClick={() => setOpen(false)}><a href="#">Features</a></li>
            <li className='border-[1px] w-full rounded border-gray-400 p-1 hover:scale-105 duration-300 hover:text-green-400' onClick={() => setOpen(false)}><a href="#" >Product</a></li>
            <li className='border-[1px] w-full rounded border-gray-400 p-1 hover:scale-105 duration-300 hover:text-green-400' onClick={() => setOpen(false)}><a href="#">Clients</a></li>
          </ul>
        </div>
        )}
        
    </div>
  )
}

export default Nav