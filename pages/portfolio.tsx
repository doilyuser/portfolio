import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import Nav from './Nav'

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
            Portfolio
          </h1>
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
