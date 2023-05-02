import { Courier_Prime } from 'next/font/google'
import TypeScript from '../Icons/TypeScript'
import React from '../Icons/React'
import Redux from '../Icons/Redux'
import Bulma from '../Icons/Bulma'
import Auth0 from '../Icons/Auth0'
import PostgreSQL from '../Icons/PostgreSQL'

const courierBold = Courier_Prime({
    subsets: ['latin'],
    weight: '700',
  })


export default function MoneyArticle() {
    return (
        <>
            <div className="snap-start shrink-0 grid h-screen">
                <div className='flex flex-col h-full justify-center place-items-center'>
                    <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
                        Show-me-the-money
                    </h2>
                    <p className='text-2xl'>
                        <span className={`${courierBold.className}`}>14.04.23</span>
                    </p>
                    <p className='text-lg pt-3 pb-6 w-4/6 '>
                        <span className={`${courierBold.className}`}>Description:</span> My first time working for a real (fake) client and employing the principles of agile. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste error natus aliquid id mollitia doloremque ab blanditiis numquam sed nostrum, fuga provident repellat porro sapiente. Assumenda quia necessitatibus inventore!
                    </p>
                    <div className='flex justify-center place-items-center w-4/6 '>
                        <TypeScript />
                        <React />
                        <Redux />
                        <Auth0 />
                        <Bulma />
                        <PostgreSQL />
                    </div>
                    <p className='text-lg pt-6 pb-6 w-4/6'>
                        <span className={`${courierBold.className}`}>Reflections:</span> Maaaan agile be hard. Seeing it was impressive though. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat aut blanditiis fuga suscipit possimus, ex molestias itaque neque. Cumque eos enim, natus illo incidunt esse sequi perspiciatis earum aliquid!
                    </p>
                    <div className='flex flex-row justify-center text-lg pt-6 pb-6 w-4/6 underline'>
                        <a className='mx-6' href="https://github.com/doilyuser/show-me-the-money">
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}