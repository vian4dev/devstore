import Link from "next/link";
import { SearchIcon, User } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";

export function Header() {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    devstore
                </Link>

                <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
                    <SearchIcon className="h-5 w-5 text-zinc-500" />

                    <input placeholder="Buscar produto..." className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" />
                </form>
            </div>

            <div className="flex items-center gap-4">
                <CartWidget />

                <div className="w-px h-4 bg-zinc-700"></div>

                <Link href="/" className="flex items-center gap-2 hover:underline">
                    <span className="text-sm">Account</span>
                    <User className="h-6 w-6" />
                </Link>
            </div>

        </div>
    )
}