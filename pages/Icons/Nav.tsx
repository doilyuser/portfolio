import { TiHome } from "@react-icons/all-files/ti/TiHome";
import { TiPhone } from "@react-icons/all-files/ti/TiPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="flex flex-wrap absolute p-2">
            <Link href="/">
                <TiHome size="3rem"/>
            </Link>
            <a className="px-1" href="tel:+64272545605">
                <TiPhone size="3rem"/>
            </a>
            <a href="mailto:louisalexanderdyer@gmail.com">
                <MdEmail size="3rem"/>
            </a>
        </div>
    )
}