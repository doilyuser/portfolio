import { TiHome } from "@react-icons/all-files/ti/TiHome";
import { TiPhone } from "@react-icons/all-files/ti/TiPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-wrap absolute p-2">
            <Link href="/">
                <TiHome className="h-10 w-10"/>
            </Link>
            <a className="px-1" href="tel:+64272545605">
                <TiPhone className="h-10 w-10"/>
            </a>
            <a href="mailto:louisalexanderdyer@gmail.com">
                <MdEmail className="h-10 w-10"/>
            </a>
        </div>
    )
}