import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import { IoMdArrowDown } from "@react-icons/all-files/io/IoMdArrowDown";
import Nav from './Icons/Nav'
import PortfolioArticle from './Components/PortfolioArticle';
import PortfolioSplash from './Components/PortfolioSplash';

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
        <PortfolioSplash />
        <PortfolioArticle />
      </div>
    </div>
  )
}
