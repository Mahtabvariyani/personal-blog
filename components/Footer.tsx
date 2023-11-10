import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="border-t-2 mt-6">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-xl mb-3">There is no  Download for This app </h3>
            <p className='text-yellow-300 text-extrabold text-2xl'> Was hier steht, ist vollkommener Quatsch. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                    <Image src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"alt='image' width={8} height={8}  />
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                    <Image 
                    alt='image'
                    width={7}
                    height={7}
                    
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Beautiful Footer, 2021. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer
