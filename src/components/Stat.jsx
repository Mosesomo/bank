import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

const Stat = () => {
  return (
    <div className='w-[100%] grid grid-cols-3 lg:flex justify-between items-center gap-4'>
        <img className='w-[100px] lg:w-[200px] object-cover' src={airbnb} alt="" />
        <img className='w-[100px] lg:w-[200px] object-cover' src={binance} alt="" />
        <img className='w-[100px] lg:w-[200px] object-cover' src={coinbase} alt="" />
        <img className='w-[100px] lg:w-[200px] object-cover' src={dropbox} alt="" />
    </div>
  )
}

export default Stat