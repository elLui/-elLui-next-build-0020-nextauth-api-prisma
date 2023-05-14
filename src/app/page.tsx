import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <h1 className="text-4xl text-center font-bold text-gray-400">Home</h1>
            <p className="text-2xl text-center font-bold text-gray-400">this page can be viewed without protection</p>

            <Link href={"/protected"} className="text-2xl text-center font-bold text-gray-400">
                Go to protected page
            </Link>


        </main>
    )
}
