import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  const [color, setColor] = useState('text-white')

  useEffect(() => {}, [color])

  const hover = () => {
    setColor('text-gray-800')
  }

  const unhover = () => {
    setColor('text-white')
  }

  return (
    <main
      className={`${courier.className}  transition duration-500 ${color} bg-black`}
    >
      <div className="flex w-screen h-screen justify-center items-center uppercase">
        <div className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase">
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
              onMouseEnter={hover}
              onMouseOut={unhover}
              className="underline sm:no-underline flex justify-between transition hover:text-white hover:duration-500 hover:scale-110"
              // className="flex justify-between transition hover:rotate-6 hover:text-white hover:-translate-y-10 hover:-translate-x-10 hover:duration-500 hover:scale-110"
              href="tel:+64272545605"
              target="_blank"
            >
              <p>+64</p>
              <p>27</p>
              <p>254</p>
              <p>5605</p>
            </a>
          </div>
          <div className="flex justify-between">
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500 hover:scale-110"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="mailto:louisalexanderdyer@gmail.com"
              target="_blank"
            >
              <p>Email</p>
            </a>
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500 hover:scale-110"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="https://www.linkedin.com/in/louisdyer/"
              target="_blank"
            >
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="flex justify-between">
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500 hover:scale-110"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="https://github.com/doilyuser"
              target="_blank"
            >
              <p>Github</p>
            </a>
            <p>&nbsp;</p>
            <a
              className="underline sm:no-underline transition hover:text-white hover:duration-500 hover:scale-110"
              onMouseEnter={hover}
              onMouseOut={unhover}
              href="/portfolio"
            >
              <p>Portfolio</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
