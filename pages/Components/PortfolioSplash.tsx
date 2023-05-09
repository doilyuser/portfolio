import { IoMdArrowDown } from '@react-icons/all-files/io/IoMdArrowDown'

export default function PortfolioSplash() {
  return (
    <div className="snap-start shrink-0 grid h-screen place-items-center">
      <h2 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
        What&apos;s that?
      </h2>
      <div>
        <IoMdArrowDown className="animate-bounce h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-full" />
      </div>
    </div>
  )
}
