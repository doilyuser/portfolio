import { Courier_Prime } from 'next/font/google'
import TypeScript from '../Icons/TypeScript'
import React from '../Icons/React'
import Redux from '../Icons/Redux'
import Bulma from '../Icons/Bulma'
import Auth0 from '../Icons/Auth0'
import PostgreSQL from '../Icons/PostgreSQL'

const courierBold = Courier_Prime({
  subsets: ['latin'],
  weight: '700',
})

export default function MoneyArticle() {
  return (
    <>
      <div className="snap-start shrink-0 grid h-screen">
        <div className="flex flex-col h-full justify-center place-items-center">
          <div className="flex flex-col w-screen md:w-4/6 justify-center place-items-center">
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center place-items-center">
              Show-me-the-money
            </h2>
            <p className="text-2xl">
              <span className={`${courierBold.className}`}>14.04.23</span>
            </p>
            <p className="text-base pt-3 pb-6 overflow-y-scroll scrollbar-hide">
              <span className={`${courierBold.className}`}>Description:</span>{' '}
              My first time coding for a real (fake) client and employing the
              principles of agile. In a team of 10 we were tasked with turning
              user stories into a fully functional application. This experience
              most closely resembled a simulation of a real-world work force.
            </p>
            <div className="flex justify-center place-items-center overflow-x-scroll scrollbar-hide">
              <TypeScript />
              <React />
              <Redux />
              <Auth0 />
              <Bulma />
              <PostgreSQL />
            </div>
            <p className="text-base pt-6 pb-6 overflow-y-scroll scrollbar-hide">
              <span className={`${courierBold.className}`}>Reflections:</span>{' '}
              Whilst we had all practiced giving actionable and specific
              feedback before, our facilitator moderated retro after the first
              day was a masterclass. I had wished I was a fly on the wall or
              behind a one-way mirror as I couldn&apos;t take notes whilst the
              growth criticism was levied at the team and I. The next day I
              thought I would be walking into a team dismayed and demotivated
              however, the opposite was true. Everyone was determined to deliver
              on the advice levied and even though the feedback was critical it
              only helped us axe our inefficiencies and hone the dynamics that
              were working.
            </p>
            <div className="flex flex-row justify-center text-lg p-1 md:pt-6 pb-6 w-4/6 underline">
              <a
                className="mx-6"
                href="https://github.com/doilyuser/show-me-the-money"
              >
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
