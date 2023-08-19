import card from '../assets/card.png'

const Card = () => {
  return (
    <div className='w-[100%] lg:flex justify-between items-center pt-8 mt-14'>
        <div className='w-[100%] mb-6'>
            <h1 className='text-3xl font-semibold'>Find a better card deal</h1>
            <h1 className='text-3xl font-semibold mb-4'>in a few steps</h1>
            <p className=''>Enter your credit score, debt amount and income to find the
            best rate for your desired loan.</p>
            <button className='mt-8 bg-[#80f5f5] text-black font-semibold p-3 rounded-lg hover:scale-105 duration-300'>Get started</button>
        </div>
        <div className='w-[100%]'>
            <img className='w-[100%] object-cover' src={card} alt="" />
        </div>
    </div>
  )
}

export default Card