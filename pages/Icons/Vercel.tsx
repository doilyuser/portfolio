import { SiVercel } from '@icons-pack/react-simple-icons';

export default function Vercel() {
    return (
        <div className="flex flex-col place-items-center w-32 border rounded-lg p-2 bg-gray-900 m-1">
        <SiVercel className="h-20 w-20" />
        <p className="pt-1">Vercel</p>
        </div>
    )
}