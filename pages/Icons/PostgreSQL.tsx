import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";

export default function PostgreSQL() {
    return (
        <div className="flex flex-col place-items-center w-32 border rounded-lg p-2 m-1">
        <SiPostgresql size="5rem" />
        <p className="pt-1">PostgreSQL</p>
        </div>
    )
}