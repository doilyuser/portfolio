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
    <main className={`${courier.className} 'Courier New', monospace`}>
      {/* <div className="h-max text-9xl flex min-h-screen flex-col content-center items-center justify-between p-24">
        <div className="h-max flex flex-row content-center items-center"> */}
      {/* <div className="grid grid-cols-10 place-content-center text-9xl h-screen"> */}

      {/* justify-between	justify-content: space-between;
      justify-around	justify-content: space-around;
      justify-evenly	justify-content: space-evenly;
      justify-stretch */}

      <div className="flex w-screen h-screen justify-center items-center uppercase">
        <div className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase">
          <div className="flex justify-between">
            <p>Louis&nbsp;</p>
            <p>Dyer&nbsp;</p>
            <p>Full</p>
          </div>
          <div className="flex justify-between">
            <p>Stack&nbsp;</p>
            <p>Developer</p>
          </div>
          <div>
            <a
              className="flex justify-between"
              href="tel:+64272545605"
              target="_blank"
            >
              <p>+64&nbsp;</p>
              <p>27&nbsp;</p>
              <p>254&nbsp;</p>
              <p>5605</p>
            </a>
          </div>
          <div className="flex justify-between">
            <a href="mailto:louisalexanderdyer@gmail.com" target="_blank">
              <p>Email&nbsp;</p>
            </a>
            <a href="https://www.linkedin.com/in/louisdyer/" target="_blank">
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="flex justify-between">
            <a href="https://github.com/doilyuser" target="_blank">
              <p>Github&nbsp;</p>
            </a>
            <a href="/portfolio">
              <p>Portfolio</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
