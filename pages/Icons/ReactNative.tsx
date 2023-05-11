import { SiReact } from '@react-icons/all-files/si/SiReact'

export default function ReactNative() {
  return (
    <div className="flex flex-col justify-center place-items-center w-28 h-28 border rounded-lg p-2 m-1">
      <SiReact className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-auto" />
      <p className="pt-1 text-base text-center">Native</p>
    </div>
  )
}
