import { Courier_Prime } from 'next/font/google'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './Components/Nav'
import PortfolioArticle from './Components/PortfolioArticle'
import PingpongArticle from './Components/PingpongArticle'
import MoneyArticle from './Components/MoneyArticle'
import OlderProjects from './Components/OlderProjects'
import Head from 'next/head'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Portfolio() {
  const [color, setColor] = useState('text-white')

  useEffect(() => {
    AOS.init()
  }, [color])
  // useEffect(() => {
  //   AOS.init()
  // }, [])

  const hover = () => {
    setColor('text-gray-800')
  }

  const unhover = () => {
    setColor('text-white')
  }

  return (
    <>
      <Head>
        <title>Louis&apos; Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${courier.className} transition duration-500 ${color}`}>
        <Nav />
        {/* First object needs padding
        <div className="pt-[50vh]"></div>
        Then we need to add animations (maybe change the padding to vh)
        <div
          data-aos="fade-up"
          className="px-32 my-32 text-base pt-6 pb-6 overflow-y-scroll scrollbar-hide"
        ></div> */}
        <div className="">
          <PortfolioArticle />
          <PingpongArticle />
          <MoneyArticle />
          <OlderProjects />
        </div>
      </div>
    </>
  )
}
