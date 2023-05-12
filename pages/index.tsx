import { Courier_Prime } from 'next/font/google'
import Header from './Components/Header'
import Splash from './Components/Splash'
import Portfolio from './Components/Portfolio'
import Pingpong from './Components/Pingpong'
import ShowMeTheMoney from './Components/ShowMeTheMoney'
import OlderProjects from './Components/OlderProjects'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <>
      {/* 640px 768px 1024px 1280px 1536px tailwind default breakpoints */}
      <Header />
      <main
        className={`${courier.className} w-[100vw] text-white bg-zinc-950 overflow-hidden`}
      >
        <Splash />
        <div className="flex justify-center">
          <div className="w-full md:w-11/12 lg:w-10/12 2xl:w-9/12">
            <Portfolio />
            <Pingpong />
            <ShowMeTheMoney />
            <OlderProjects />
            <div className="pt-[10vh] invisible">
              This is just here for the animations lol, will fix later
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
