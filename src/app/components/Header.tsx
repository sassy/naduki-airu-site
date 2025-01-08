"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-green-900 text-white">
            <nav className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider hover:text-yellow-400 transition-colors">
                        菜月アイル非公式ファンサイト
                    </Link>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href="#" className="hover:text-yellow-400 transition-colors tracking-wide">ニュース</Link></li>
                        <li><Link href="#discography" className="hover:text-yellow-400 transition-colors tracking-wide">ディスコグラフィー</Link></li>
                        <li><Link href="#schedule" className="hover:text-yellow-400 transition-colors tracking-wide">スケジュール</Link></li>
                        <li><Link href="#profile" className="hover:text-yellow-400 transition-colors tracking-wide">プロフィール</Link></li>
                    </ul>
                </div>
                {isMenuOpen && (
                    <ul className="mt-4 space-y-2 md:hidden">
                        <li><Link href="#news" className="block hover:text-yellow-400 transition-colors tracking-wide">ニュース</Link></li>
                        <li><Link href="#discography" className="block hover:text-yellow-400 transition-colors tracking-wide">ディスコグラフィー</Link></li>
                        <li><Link href="#schedule" className="block hover:text-yellow-400 transition-colors tracking-wide">スケジュール</Link></li>
                        <li><Link href="#profile" className="block hover:text-yellow-400 transition-colors tracking-wide">プロフィール</Link></li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

