import { Courier_Prime } from 'next/font/google'
import Header from './Components/Header'
import Splash from './Components/Splash'
import PortfolioArticle from './Components/PortfolioArticle'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`${courier.className} transition duration-500 text-white bg-black`}
      >
        <Splash />
        <PortfolioArticle />
      </main>
    </>
  )
}
