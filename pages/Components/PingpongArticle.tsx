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
                <div className='flex flex-col h-full justify-center place-items-center'>
                    <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
                        Pingpong
                    </h2>
                    <p className='text-2xl'>
                        <span className={`${courierBold.className}`}>14.04.23</span>
                    </p>
                    <p className='text-lg pt-3 pb-6 w-4/6 '>
                        <span className={`${courierBold.className}`}>Description:</span> Our &quot;Capstone&quot; or final project at Dev Academy. We were tasked with fully simulating the work environment, starting with pitches and ending with a product demonstration in front of a live audience. 
                    </p>
                    <div className='flex justify-center place-items-center w-4/6 '>
                        <ReactNative />
                        <Redux />
                        <Expo />
                        <Firebase />
                    </div>
                    <p className='text-lg pt-6 pb-6 w-4/6'>
                        <span className={`${courierBold.className}`}>Reflections:</span> How to have a good time whilst having a hard time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam possimus fugiat nam hic, minima ullam non? Temporibus dolores quam illum illo? Maxime saepe blanditiis tenetur libero laborum natus ad.
                    </p>
                    <div className='flex flex-row justify-center text-lg pt-6 pb-6 w-4/6 underline'>
                        <a className='mx-6' href="https://github.com/doilyuser/pingpong">
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}