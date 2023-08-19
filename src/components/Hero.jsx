import discount from '../assets/Discount.svg'
import arrow from '../assets/arrow-up.svg'
import robot from '../assets/robot.png'

const Hero = () => {
  return (
    <div className='w-[100%] mt-16 py-11 lg:flex justify-between items-center'>
      <div className='w-[100%]'>
        <div className='lg:w-[400px] bg-gray-950 flex justify-start gap-2 p-2 items-center rounded-md'>
          <div>
            <img src={discount} alt="" />
          </div>
          <div>
            <h2>20% <span className='text-gray-300'>Discount</span> For 1 month Account</h2>
          </div>
        </div>
        <div className='w-[100%] mt-6 lg:flex justify-start gap-5 mb-5'>
          <div className='w-[100%]'>
            <h1 className='text-5xl font-semibold'>The Next</h1>
            <h1 className='text-5xl font-semibold bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent'>Generation</h1>
            <h1 className='text-5xl font-semibold'>Payment Method.</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptates soluta, nam veritatis sapiente accusamus voluptas officia?</p>
          </div>
          <div className='w-[100%] flex justify-end m-4'>
            <div className='w-[90px] h-[90px] p-5 rounded-[50%] border-[2px] border-bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent'>
              <div className='w-[100%] flex lg:justify-star'>
                <div className=''>
                  <p className='bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent'>Get</p>
                </div>
                <div className=''>
                  <img src={arrow} alt="" />
                </div>
              </div>
              <p className='bg-gradient-to-r from-green-300 to-green-800 bg-clip-text text-transparent'>Started</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%]'>
        <img className='w-[100%] object-cover' src={robot} alt="" />
      </div>
    </div>
  )
}

export default Hero