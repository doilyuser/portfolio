import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
  // style: 'normal',
})

const courierBold = Courier_Prime({
  subsets: ['latin'],
  weight: '700',
  // style: 'normal',
})

export default function Home() {
  console.log(courier)
  return (
    <main className={`${courier.className}`}>
      {/* <div className="h-max text-9xl flex min-h-screen flex-col content-center items-center justify-between p-24">
        <div className="h-max flex flex-row content-center items-center"> */}
      <div className="grid grid-cols-10 place-content-center text-9xl h-screen">
        <h1>
          <span>L</span>
          <span>O</span>
          <span>U</span>
          <span>I</span>
          <span>S</span>
          <span className="col-span-1"></span>
          <span>D</span>
          <span>Y</span>
          <span>E</span>
          <span>R</span>
        </h1>
        <h1></h1>
        <h1>
          <span>D</span>
          <span>Y</span>
          <span>E</span>
          <span>R</span>
          <span>_</span>
        </h1>
      </div>
      {/* </div>
      </div> */}
    </main>
  )
}
