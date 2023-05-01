import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import { IoMdArrowDown } from "@react-icons/all-files/io/IoMdArrowDown";
import Nav from './Icons/Nav'
import React from './Icons/React'
import ReactNative from './Icons/ReactNative'
import Redux from './Icons/Redux'
import Express from './Icons/Express'
import PostgreSQL from './Icons/PostgreSQL'
import Auth0 from './Icons/Auth0'
import SQLite3 from './Icons/SQLite3'
import Tailwind from './Icons/Tailwind'
import Next from './Icons/Next'
import Expo from './Icons/Expo'
import Firebase from './Icons/Firebase'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Portfolio() {
  const [color, setColor] = useState('text-white')

  useEffect(() => {}, [color])

  const hover = () => {
    setColor('text-gray-800')
  }

  const unhover = () => {
    setColor('text-white')
  }

  return (
    <div
      className={`${courier.className} transition duration-500 ${color} bg-black`}
    >
      <Nav />
      <div className="flex flex-col snap-y snap-mandatory h-screen overflow-x-hidden">
      <div className="snap-start shrink-0 grid h-screen place-items-center">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            What&apos;s that? 
          </h1>
          <div>
          <IoMdArrowDown className="animate-bounce" size="5rem" />
          </div>
        </div>
        <div className="snap-start shrink-0 grid h-screen place-items-center">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            Pingpong
          </h1>
          <p>
            Title, Date, Description, Tech, Reflections
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae quisquam adipisci velit laborum magni id. Vitae, odit excepturi aut, officiis odio corporis libero cum animi minus facilis numquam doloremque.
          </p>
          <div className='flex'>
            <React />
            <ReactNative />
            <Redux />
            <Express />
            <PostgreSQL />
            <Auth0 />
            <SQLite3 />
            <Tailwind />
            <Next />
            <Expo />
            <Firebase />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat, vero sapiente suscipit veritatis error alias eligendi beatae dolor. Voluptatem placeat dolorum sint rerum eveniet dolore vitae unde esse eligendi.
          </p>
        </div>
        <div className="snap-start shrink-0 grid h-screen place-items-center">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            Second part
          </h1>
        </div>
        <div className="snap-start shrink-0 grid h-screen place-items-center">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            Third thing
          </h1>
        </div>
        <div className="snap-start shrink-0 grid h-screen place-items-center">
          <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            Section D
          </h1>
        </div>
      </div>
    </div>
  )
}
