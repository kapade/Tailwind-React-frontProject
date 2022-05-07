import React from 'react'

function About() {
  return (
    <div name='about' className='w-full my-32 h-screen'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold capitalize'>Trusted by Developers across the world</h2>
                <p className='text-2xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam asperiores illo provident veritatis obcaecati numquam minus officia neque iusto!</p>
            </div>
            <div className='block  md:flex justify-between px-4 text-center'>
                <div className='border py-8 m-2 rounded-xl shadow-lg w-full'>
                    <p className='text-5xl font-bold text-indigo-600'>100%</p>
                    <p className='text-slate-500 mt-2'>Completion</p>
                </div>
                <div className='border py-8 m-2 rounded-xl shadow-lg w-full'>
                    <p className='text-5xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-slate-500 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 m-2 rounded-xl shadow-lg w-full'>
                    <p className='text-5xl font-bold text-indigo-600'>100K</p>
                    <p className='text-slate-500 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About