import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

const Billing = () => {
  return (
    <div className='w-[100%] mt-14 pt-8  lg:flex justify-between items-center'>
        <div className='w-[100%] mb-6'>
            <img className='w-[100%] object-cover' src={bill} alt="" />
        </div>
        <div className='w-[100%]'>
            <h2 className='text-5xl bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent font-semibold'>Easily Control your</h2>
            <h2 className='text-5xl bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent font-semibold mb-4'>Billing & invoicing.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quisquam accusamus omnis tempore dolorem dignissimos amet non sint, nisi illo voluptatum</p>
            <div className='w-[100%] flex justify-center gap-7 items-center mt-5'>
                <img className='w-[100%] object-cover hover:scale-105 duration-300' src={apple} alt="" />
                <img className='w-[100%] object-cover hover:scale-105 duration-300' src={google} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Billing