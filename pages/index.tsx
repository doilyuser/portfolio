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
      {/* 640px 768px 1024px 1280px 1536px tailwind default breakpoints */}
      <Header />
      <main className={`${courier.className} text-white bg-zinc-950`}>
        <Splash />
        <div className="w-screen sm: md: lg: xl: 2xl:">
          <PortfolioArticle />
        </div>
      </main>
    </>
  )
}
