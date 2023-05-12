import { SiAuth0 } from '@react-icons/all-files/si/SiAuth0'

export default function Auth() {
  return (
    <div className="flex flex-col justify-center place-items-center w-28 h-28 border rounded-lg p-2 m-1">
      <SiAuth0 className="w-auto h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24" />
      <p className="pt-1 text-base text-center">Auth0</p>
    </div>
  )
}
