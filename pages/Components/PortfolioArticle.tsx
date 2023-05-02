import { Courier_Prime } from 'next/font/google'
import React from '../Icons/React'
import Tailwind from '../Icons/Tailwind'
import Next from '../Icons/Next'
import Vercel from '../Icons/Vercel'

const courierBold = Courier_Prime({
    subsets: ['latin'],
    weight: '700',
  })


export default function PortfolioArticle() {
    return (
        <>
            <div className="snap-start shrink-0 grid h-screen">
                <div className='flex flex-col h-full justify-center place-items-center'>
                    <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
                        Portfolio
                    </h2>
                    <p className='text-2xl'>
                        <span className={`${courierBold.className}`}>28.04.23</span>
                    </p>
                    <p className='text-lg pt-3 pb-6 w-4/6'>
                        <span className={`${courierBold.className}`}>Description:</span> My final task at Dev Academy was to create and deploy this website. A place to showcase my work as I turn my eye to employment. I took this as an opportunity to fully modernise my stack by learning and adding Tailwind, Next.js & deploying with Vercel. Isn&apos;t that what all the cool kids are doing these days? 
                    </p>
                    <div className='flex place-items-center'>
                        <React />
                        <Tailwind />
                        <Next />
                        <Vercel />
                    </div>
                    <p className='text-lg pt-6 pb-6 w-4/6'>
                        <span className={`${courierBold.className}`}>Reflections:</span> To follow...
                    </p>
                    <div className='flex flex-row justify-center text-lg pt-6 pb-6 w-4/6 underline'>
                        <a className='mx-6' href="https://github.com/doilyuser/portfolio">
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}