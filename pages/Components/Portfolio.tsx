import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

//icons
import React from '../Icons/React'
import Express from '../Icons/Express'
import ReactNative from '../Icons/ReactNative'
import Vercel from '../Icons/Vercel'
import PostgreSQL from '../Icons/PostgreSQL'

const courierBold = Courier_Prime({
  subsets: ['latin'],
  weight: '700',
})

export default function PortfolioArticle() {
  const [color, setColor] = useState('text-white')

  useEffect(() => {
    AOS.init()
  }, [color])

  const hover = () => {
    setColor('text-gray-800')
  }

  const unhover = () => {
    setColor('text-white')
  }
  return (
    <div className="w-full flex flex-col justify-center place-items-center md:grid md:justify-items-start md:w-10/12 lg:w-8/12">
      {/* <div className="grid pl-[30vw] justify-items-end"> */}
      <div data-aos="fade-right" data-aos-offset="300">
        <h1 className="pt-80 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl xl:pt-60 uppercase">
          Portfolio
        </h1>
        <p
          className={`${courierBold.className} text-2xl md:textl-3xl lg:text-4xl pb-20`}
        >
          28.04.23
        </p>
      </div>
      <p
        data-aos="fade-right"
        data-aos-offset="300"
        className="text-base py-20"
      >
        <span className={`${courierBold.className}`}>Desc:</span> My final task
        at Dev Academy was to create and deploy this website. A place to
        showcase my work as I turn my eye to employment. I took this as an
        opportunity to fully modernize my stack by learning and adding Tailwind,
        Next.js & deploying with Vercel. Isn&apos;t that what all the cool kids
        are doing these days?
      </p>
      <div className="w-full flex flex-wrap justify-center place-items-center py-20">
        <div data-aos="fade-right" data-aos-offset="300">
          <React />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="100">
          <ReactNative />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="200">
          <React />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="300">
          <PostgreSQL />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="400">
          <React />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="500">
          <ReactNative />
        </div>
      </div>
      <p
        data-aos="fade-right"
        data-aos-offset="300"
        className="text-base py-20"
      >
        <span className={`${courierBold.className}`}>Retro:</span> Coding
        without the structure of Dev Academy around is a lot harder. Both to
        maintain a schedule and focus on the MVP. More than a few times I got
        invested in building a slick animation and lost sight of the assessment
        goals. Using Tailwind is interesting. I think it shines when trying to
        quickly spin up a prototype but, for now, I can&apos;t seem to customize
        it how I would like. I would need to spin up a Full-Stack CRUD app to
        feel I&apos;ve made any inroads with Next.js, perhaps that should be my
        &quot;next&quot; adventure.
      </p>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="w-full flex justify-around pt-20 pb-40"
      >
        <a
          className="flex justify-center place-items-center border rounded-lg py-2 px-4 underline hover:no-underline sm:no-underline sm:hover:underline"
          href="https://github.com/doilyuser/portfolio"
        >
          <p>View Code</p>
        </a>
        <a
          className="flex justify-center place-items-center border rounded-lg py-2 px-4 underline hover:no-underline sm:no-underline sm:hover:underline"
          href="https://louis.computer/"
          target="_blank"
        >
          <p>View Live</p>
        </a>
      </div>
    </div>
  )
}
