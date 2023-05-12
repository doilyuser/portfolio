import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

//icons
import Redux from '../Icons/Redux'
import TypeScript from '../Icons/TypeScript'
import React from '../Icons/React'
import Auth0 from '../Icons/Auth0'
import Bulma from '../Icons/Bulma'
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
        <h1 className="pt-40 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl xl:pt-60 uppercase">
          Show me the money
        </h1>
        <p
          className={`${courierBold.className} text-2xl md:textl-3xl lg:text-4xl pb-20`}
        >
          05.04.23
        </p>
      </div>
      <p
        data-aos="fade-right"
        data-aos-offset="300"
        className="text-base text-justify py-20"
      >
        <span className={`${courierBold.className}`}>Desc:</span> My first time
        coding for a real (fake) client and employing the principles of agile.
        In a team of 10 we were tasked with turning user stories into a fully
        functional application. This experience most closely resembled a
        simulation of a real-world work force.
      </p>
      <div className="w-full flex flex-wrap justify-center place-items-center py-20">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="500">
          <TypeScript />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="400">
          <React />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="300">
          <Redux />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="200">
          <Auth0 />
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="100">
          <Bulma />
        </div>
        <div data-aos="fade-right" data-aos-offset="300">
          <PostgreSQL />
        </div>
      </div>
      <p
        data-aos="fade-right"
        data-aos-offset="300"
        className="text-base text-justify py-20"
      >
        <span className={`${courierBold.className}`}>Retro:</span> Whilst we had
        all practiced giving actionable and specific feedback before, our
        facilitator moderated retro after the first day was a masterclass. I had
        wished I was a fly on the wall or behind a one-way mirror as I
        couldn&apos;t take notes whilst the growth criticism was levied at the
        team and I. The next day I thought I would be walking into a team
        dismayed and demotivated however, the opposite was true. Everyone was
        determined to deliver on the advice levied and even though the feedback
        was critical it only helped us axe our inefficiencies and hone the
        dynamics that were working.
      </p>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="w-full flex justify-around pt-20 pb-40"
      >
        <a
          className="flex justify-center place-items-center border rounded-lg py-2 px-4 underline hover:no-underline sm:no-underline sm:hover:underline"
          href="https://github.com/doilyuser/show-me-the-money"
        >
          <p>View Code</p>
        </a>
        <a
          className="invisible flex justify-center place-items-center border rounded-lg py-2 px-4 underline hover:no-underline sm:no-underline sm:hover:underline"
          href=""
          target="_blank"
        >
          <p>View Live</p>
        </a>
      </div>
    </div>
  )
}
