import { Courier_Prime } from 'next/font/google'
import React from '../Icons/React'
import Tailwind from '../Icons/Tailwind'
import Next from '../Icons/Next'
import Vercel from '../Icons/Vercel'

const courierBold = Courier_Prime({
  subsets: ['latin'],
  weight: '700',
})

export default function PortfolioArticle() {
  return (
    <div className="grid justify-items-start w-8/12">
      <h1 className="pt-[50vw] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl uppercase">
        Portfolio
      </h1>
      <p className="text-2xl">
        <span className={`${courierBold.className}`}>28.04.23</span>
      </p>
      <p className="text-base pt-3 pb-6 overflow-y-scroll scrollbar-hide">
        <span className={`${courierBold.className}`}>Description:</span> My
        final task at Dev Academy was to create and deploy this website. A place
        to showcase my work as I turn my eye to employment. I took this as an
        opportunity to fully modernize my stack by learning and adding Tailwind,
        Next.js & deploying with Vercel. Isn&apos;t that what all the cool kids
        are doing these days?
      </p>
      <div className="flex justify-center place-items-center overflow-x-scroll scrollbar-hide">
        <React />
        <Tailwind />
        <Next />
        <Vercel />
      </div>
      <p className="text-base pt-6 pb-6 overflow-y-scroll scrollbar-hide">
        <span className={`${courierBold.className}`}>Reflections:</span> Coding
        without the structure of Dev Academy around is a lot harder. Both to
        maintain a schedule and focus on the MVP. More than a few times I got
        invested in building a slick animation and lost sight of the assessment
        goals. Using Tailwind is interesting. I think it shines when trying to
        quickly spin up a prototype but, for now, I can&apos;t seem to customize
        it how I would like. I would need to spin up a Full-Stack CRUD app to
        feel I&apos;ve made any inroads with Next.js, perhaps that should be my
        &quot;next&quot; adventure.
      </p>
      <div className="underline hover:no-underline">
        <a className="" href="https://github.com/doilyuser/portfolio">
          <p>Github</p>
        </a>
      </div>
    </div>
  )
}
