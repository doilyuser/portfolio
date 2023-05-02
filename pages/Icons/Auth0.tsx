import { SiAuth0 } from "@react-icons/all-files/si/SiAuth0";

export default function Auth() {
    return (
        <div className="flex flex-col place-items-center w-32 border rounded-lg p-2 m-1">
        <SiAuth0 size="5rem" />
        <p className="pt-1">Auth0</p>
        </div>
    )
}