import React from '../Icons/React'
import Tailwind from '../Icons/Tailwind'
import Next from '../Icons/Next'
import Vercel from '../Icons/Vercel'


export default function PortfolioArticle() {
    return (
        <>
            <div className="snap-start shrink-0 grid h-screen place-items-center">
                <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
                    Portfolio
                </h2>
                <p>
                    Title, Date, Description, Tech, Reflections
                </p>
                <div className='flex'>
                    <React />
                    <Tailwind />
                    <Next />
                    <Vercel />
                </div>
            </div>
        </>
    )
}