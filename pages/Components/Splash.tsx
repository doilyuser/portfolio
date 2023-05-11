import { Courier_Prime } from 'next/font/google'
import { useState, useEffect } from 'react'
import { IoMdArrowDown } from '@react-icons/all-files/io/IoMdArrowDown'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Splash() {
  const [color, setColor] = useState('text-white')

  useEffect(() => {}, [color])

  const hover = () => {
    setColor('text-gray-800')
  }

  const unhover = () => {
    setColor('text-white')
  }

  return (
    <div className={`transition duration-500 ${color}`}>
      <div className="flex w-screen h-screen justify-center items-center uppercase">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl uppercase">
          <div className="flex justify-between transition">
            <p>Louis</p>
            <p>Dyer</p>
            <p>Full</p>
          </div>
          <div className="flex justify-between transition">
            <p>Stack</p>
            <p>Developer</p>
          </div>
          <div>
            <a
              onMouseOut={unhover}
              className="group underline sm:no-underline transition hover:text-white hover:duration-500"
              href="tel:+64272545605"
              target="_blank"
            >
              <p className="flex justify-between w-full">
                <span onMouseEnter={hover}>+64</span>
                <span onMouseEnter={hover}>27</span>
                <span onMouseEnter={hover}>254</span>
                <span onMouseEnter={hover}>5605</span>
              </p>
            </a>
          </div>
          <div className="flex justify-between">
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="mailto:louisalexanderdyer@gmail.com"
              target="_blank"
            >
              <p>Email</p>
            </a>
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="https://www.linkedin.com/in/louisdyer/"
              target="_blank"
            >
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <IoMdArrowDown className="absolute bottom-0 animate-bounce h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-full" />
      </div>
    </div>
  )
}
