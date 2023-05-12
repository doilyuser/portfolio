import { SiCss3 } from '@react-icons/all-files/si/SiCss3'

export default function CSS() {
  return (
    <div className="flex flex-col justify-center place-items-center w-28 h-28 border rounded-lg p-2 m-1">
      <SiCss3 className="w-auto h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24" />
      <p className="pt-1 text-base text-center">CSS</p>
    </div>
  )
}
