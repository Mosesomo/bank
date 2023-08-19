import logo from '../assets/logo.jpg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <div className='w-[100%] py-11 mt-16'>
        <div className='w-[100%] md:grid grid-cols-2 gap-16 lg:flex justify-between border-t-[2px] border-t-white py-9 border-b-[1px] border-b-gray-700'>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] flex justify-start items-center gap-2 mb-4'>
                    <img className='w-[50px] h-[30px] rounded-l-[50%] rounded-tr-[50%]' src={logo} alt="Logo"/>
                    <div>
                        <h1 className='text-3xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-serif font-bold uppercase'><span className='text-green-800'>c</span>o-Bank</h1>
                    </div>
                </div>
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='w-[100%] mb-8'>
                <h3 className='font-semibold mb-3'>Usefull Links</h3>
                <ul>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Content</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">How it works</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Create</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Explore</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Terms and services</li>
                </ul>
            </div>
            <div className='w-[100%] mb-8'>
                <h3 className='font-semibold mb-3'>Community</h3>
                <ul>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Help center</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Partners</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Suggestions</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Blogs</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Newsletters</li>
                </ul>
            </div>
            <div className='w-[100%] mb-8'>
                <h3 className='font-semibold mb-3'>Partner</h3>
                <ul>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Our partner</li>
                    <li className="text-gray-400 hover:text-green-400 cursor-pointer">Become a partner</li>
                </ul>
            </div>
        </div>
        <div className='lg:flex justify-between items-center mt-4'>
            <p className='text-gray-400'>2023 coBank. All Rights Reserved.</p>
            <div className='flex justify-end items-center gap-3 mr-10 mt-5'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
