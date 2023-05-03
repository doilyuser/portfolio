import { Courier_Prime } from 'next/font/google'
import ReactNative from '../Icons/ReactNative'
import Expo from '../Icons/Expo'
import Firebase from '../Icons/Firebase'
import Redux from '../Icons/Redux'

const courierBold = Courier_Prime({
  subsets: ['latin'],
  weight: '700',
})

export default function PingpongArticle() {
  return (
    <>
      <div className="snap-start shrink-0 grid h-screen">
        <div className="flex flex-col h-full justify-center place-items-center">
          <div className="flex flex-col w-screen md:w-4/6 justify-center place-items-center">
            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center place-items-center">
              Pingpong
            </h2>
            <p className="text-2xl">
              <span className={`${courierBold.className}`}>14.04.23</span>
            </p>
            <p className="text-base pt-3 pb-6 overflow-y-scroll scrollbar-hide">
              <span className={`${courierBold.className}`}>Description:</span>{' '}
              Our &quot;Capstone&quot; or final project at Dev Academy. We were
              tasked with fully simulating the work environment, starting with
              pitches and ending with a product demonstration in front of a live
              audience. We chose to abandon our old tech and build with
              Expo/React Native and this decision threw more than a few hurdles.
            </p>
            <div className="flex justify-center place-items-center overflow-x-scroll scrollbar-hide">
              <ReactNative />
              <Redux />
              <Expo />
              <Firebase />
            </div>
            <p className="text-base pt-6 pb-6 overflow-y-scroll scrollbar-hide">
              <span className={`${courierBold.className}`}>Reflections:</span>{' '}
              Whilst I do not regret our decision to build a mobile app over a
              website, it proved to be challenging. Every line of code typed
              caused friction when we had just gotten comfortable in the realms
              of React. I spent the first part of the project relegated to Auth
              (kind of crucial when you&apos;re trying to build a new social
              media) where I found my first &quot;15 hour bug&quot;. Solving
              this truly kept the team going when we were genuinely considering
              starting again. It also ignited a new interest in security and
              makes me want to explore new technologies like firebase and google
              cloud further.
            </p>
            <div className="flex flex-row justify-center text-lg p-1 md:pt-6 pb-6 w-4/6 underline">
              <a className="mx-6" href="https://github.com/doilyuser/pingpong">
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
