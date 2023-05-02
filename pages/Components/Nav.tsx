import { TiHome } from "@react-icons/all-files/ti/TiHome";
import { TiPhone } from "@react-icons/all-files/ti/TiPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-wrap absolute p-2">
            <Link href="/">
                <TiHome className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-full"/>
            </Link>
            <a className="px-1" href="tel:+64272545605">
                <TiPhone className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-full"/>
            </a>
            <a href="mailto:louisalexanderdyer@gmail.com">
                <MdEmail className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 w-full"/>
            </a>
        </div>
    )
}