import Link from "next/link";

const SideBar = () => {
    return (
        <div className="bg-gray-900 text-white flex justify-between px-20 py-2">
            <ul className="flex">
                <Link href="/beranda" className="block px-4 py-2 text-center">Beranda</Link>
                <Link href="/database" className="block px-4 py-2 text-center">Database</Link>
                <Link href="/tagihan" className="block px-4 py-2 text-center">Tagihan</Link>
                <Link href="/laporan" className="block px-4 py-2 text-center">Laporan</Link>
                <Link href="/pengaturan" className="block px-4 py-2 text-center">Pengaturan</Link>
            </ul>
            <Link href="/" className="block px-4 py-2 text-center">Keluar</Link>
        </div>
    )
}

export default SideBar;