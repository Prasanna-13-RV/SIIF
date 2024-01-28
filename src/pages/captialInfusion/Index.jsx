import React from 'react'
import { Services } from './Services'

const Index = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-32 relative finance'> 
        <img  className=' absolute w-full h-full top-0 left-0 object-cover ' src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <h1 className=' z-10 font-bold text-4xl mb-16'>Capital Infusion</h1>
           <p className='bg-[#f6f6f6] p-8 border-black border-2  leading-8 shadow-md z-10  w-4/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio consectetur, fugiat maiores facere provident cumque et, quidem quam corrupti assumenda magnam repudiandae aliquam, voluptas eos veniam doloremque! Sequi, quo placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aspernatur illo totam in similique tenetur ad impedit quaerat non doloremque odio officiis corrupti, facilis, doloribus eaque, adipisci libero perspiciatis! Commodi?
           </p>
        </div>


        {/* sain */}
        <div className='w-[60%] flex justify-center items-center h-[230px] mx-auto my-[3rem] shadow-md'>


      <div className='bg-[#f6f6f6] w-3/6 h-full flex flex-col justify-evenly items-center'>
        <h1 className='text-2xl font-bold'>SAIN Investors
</h1>
<	a href="#" className="navigate-btn4">Explore</a>

      </div>
      <div className='bg-[#697743] w-3/6 h-full  flex flex-col justify-evenly items-center'>
      <h1  className='text-2xl font-bold text-white'>SAIN Startups
</h1>  		<	a href="#" className="navigate-btn3">Explore</a>

      </div>
    </div>
    
      {/* services */}
      
    <Services/>
        </div>

  
  )
}

export default Index