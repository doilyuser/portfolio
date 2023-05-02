import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";

export default function Tailwind() {
    return (
        <div className="flex flex-col place-items-center w-32 border rounded-lg p-2 bg-gray-900 m-1">
        <SiTailwindcss size="5rem" />
        <p className="pt-1">Tailwind</p>
        </div>
    )
}