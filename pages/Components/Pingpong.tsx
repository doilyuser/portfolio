import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

//icons
import ReactNative from '../Icons/ReactNative'
import Redux from '../Icons/Redux'
import Expo from '../Icons/Expo'
import Firebase from '../Icons/Firebase'

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
    <div className="w-full flex flex-col justify-center place-items-center md:grid md:justify-items-end md:pl-[16.66%] lg:pl-[33.33%]">
      <div data-aos="fade-left" data-aos-offset="300">
        <h1 className="pt-40 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl xl:pt-60 uppercase">
          Pingpong
        </h1>
        <p
          className={`${courierBold.className} text-right text-2xl md:textl-3xl lg:text-4xl pb-20`}
        >
          14.04.23
        </p>
      </div>
      <p
        data-aos="fade-left"
        data-aos-offset="300"
        className="text-base text-justify py-20"
      >
        <span className={`${courierBold.className}`}>Desc:</span> Our
        &quot;Capstone&quot; or final project at Dev Academy. We were tasked
        with fully simulating the work environment, starting with pitches and
        ending with a product demonstration in front of a live audience. We
        chose to abandon our old tech and build with Expo/React Native and this
        decision threw more than a few hurdles.
      </p>
      <div className="w-full flex flex-wrap justify-center place-items-center py-20">
        <div data-aos="fade-left" data-aos-offset="300">
          <ReactNative />
        </div>
        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="100">
          <Redux />
        </div>
        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="200">
          <Expo />
        </div>
        <div data-aos="fade-left" data-aos-offset="300" data-aos-delay="300">
          <Firebase />
        </div>
      </div>
      <p
        data-aos="fade-left"
        data-aos-offset="300"
        className="text-base text-justify py-20"
      >
        <span className={`${courierBold.className}`}>Retro:</span> Whilst I do
        not regret our decision to build a mobile app over a website, it proved
        to be challenging. Every line of code typed caused friction when we had
        just gotten comfortable in the realms of React. I spent the first part
        of the project relegated to Auth (kind of crucial when you&apos;re
        trying to build a new social media) where I found my first &quot;15 hour
        bug&quot;. Solving this truly kept the team going when we were genuinely
        considering starting again. It also ignited a new interest in security
        and makes me want to explore new technologies like firebase and google
        cloud further.
      </p>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        className="w-full flex justify-around pt-20 pb-40"
      >
        <a
          className="flex justify-center place-items-center border rounded-lg py-2 px-4 underline hover:no-underline sm:no-underline sm:hover:underline"
          href="https://github.com/doilyuser/pingpong"
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
