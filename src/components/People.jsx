import quotes from '../assets/quotes.svg'
import people01 from '../assets/people01.png'
import people02 from '../assets/people02.png'
import people03 from '../assets/people03.png'

const People = () => {
  return (
    <div className='w-[100%] py-11 mt-16'>
      <div className='w-[100%] lg:lex justify-between items-center p-9'>
        <div className='w-[100%] mb-5'>
            <h1 className='text-4xl font-semibold'>What people are</h1>
            <h1 className='text-4xl font-semibold'>saying about us</h1>
        </div>
        <div className='w-[100%]'>
            <p className='text-gray-400'>Everything you need to accept card payements</p>
            <p className='text-gray-400'>and grow your bussiness anywhere in the planet.</p>
        </div>
      </div>
      <div className='w-[100%] p-9 lg:flex justify-between items-center'>
        <div className='w-[100%] p-8 hover:bg-gray-950 cursor-pointer hover:scale-105 duration-300 rounded-lg mb-6'>
            <img className='mb-5' src={quotes} alt="" />
            <p className='text-gray-400'>Money is only a tool. it will take you anywhere you wish, but it will not replace
            you as the driver.</p>
            <div className='flex justify-start gap-3 items-center mt-5'>
                <img   src={people01} alt="" />
                <div>
                    <h3 className='font-semibold'>Herman Omondi</h3>
                    <p className='text-gray-400'>Founder and leader</p>
                </div>
            </div>
        </div>
        <div className='w-[100%] p-8 hover:bg-gray-950 cursor-pointer hover:scale-105 duration-300 rounded-lg mb-6'>
            <img className='mb-5' src={quotes} alt="" />
            <p className='text-gray-400'>Money is only a tool. it will take you anywhere you wish, but it will not replace
            you as the driver.</p>
            <div className='flex justify-start gap-3 items-center mt-5'>
                <img  src={people02} alt="" />
                <div>
                    <h3 className='font-semibold'>Johnstone lile</h3>
                    <p className='text-gray-400'>Founder and leader</p>
                </div>
            </div>
        </div>
        <div className='w-[100%] p-8 hover:bg-gray-950 cursor-pointer hover:scale-105 duration-300 rounded-lg'>
            <img className='mb-5' src={quotes} alt="" />
            <p className='text-gray-400'>Money is only a tool. it will take you anywhere you wish, but it will not replace
            you as the driver.</p>
            <div className='flex justify-start gap-3 items-center mt-5'>
                <img  src={people03} alt="" />
                <div>
                    <h3 className='font-semibold'>Collin Gallegher</h3>
                    <p className='text-gray-400'>Founder and leader</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default People
