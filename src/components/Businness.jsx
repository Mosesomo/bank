import star from '../assets/Star.svg';
import send from '../assets/Send.svg'
import shield from '../assets/Shield.svg'

const Businness = () => {
  return (
    <div className='w-[100%] mt-16 lg:flex justify-between items-center pt-11'>
        <div className='w-[100%]'>
            <h1 className='text-3xl font-semibold mb-4'>You do The Businness,</h1>
            <h1 className='text-3xl font-semibold mb-8'>We will handle the Money.</h1>
            <p>With the right credit, you can improve your financial right by building credit,  earning rewards and saving money.</p>
            <button className='mt-8 bg-[#80f5f5] text-black font-semibold p-3 rounded-lg hover:scale-105 duration-300'>Get started</button>
        </div>
        <div className='w-[100%] mt-5 md:px-20'>
            <div className='flex justify-start items-center gap-6 mb-6 cursor-pointer hover:bg-gray-950 p-4 rounded-lg hover:scale-105 duration-300'>
                <img src={star} alt="Bussiness"/>
                <div>
                    <h3 className='font-semibold mb-3 text-xl'>Rewards</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum consequatur qui, illum vitae quia</p>
                </div>
            </div>
            <div className='flex justify-start items-center gap-6 mb-6 cursor-pointer hover:bg-gray-950 p-4 rounded-lg hover:scale-105 duration-300'>
                <img src={shield} alt="Bussiness"/>
                <div>
                    <h3 className='font-semibold mb-3 text-xl'>100% secured</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum consequatur qui, illum vitae quia</p>
                </div>
            </div>
            <div className='flex justify-start items-center gap-6 cursor-pointer hover:bg-gray-950 p-4 rounded-lg hover:scale-105 duration-300'>
                <img src={send} alt="Bussiness"/>
                <div>
                    <h3 className='font-semibold mb-3 text-xl'>Balance transfer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum consequatur qui, illum vitae quia</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Businness