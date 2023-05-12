import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    <div className="w-full flex flex-col justify-center text-right place-items-center md:grid md:justify-items-end md:pl-[16.66%] lg:pl-[33.33%]">
      {/* <div className="grid pl-[30vw] justify-items-end"> */}
      <div data-aos="fade-left" data-aos-offset="300">
        <a
          href="https://github.com/doilyuser"
          target="_blank"
          className="underline hover:no-underline sm:no-underline sm:hover:underline pt-80 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl xl:pt-60 uppercase"
        >
          Older Projects
        </a>
      </div>
    </div>
  )
}
