"use client";

import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative h-[70vh] bg-green-700 overflow-hidden">
            <Image
                src="/nazuki-hero.jpg"
                alt="菜月アイル"
                layout="fill"
                objectFit="cover"
                priority
                className="object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-green-900/30">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4 shadow-lg tracking-widest">菜月アイル</h1>
                    <p className="text-xl text-green-100 shadow-md tracking-wider font-light">歌声で心を癒す、日本の歌姫</p>
                </div>
            </div>
        </section>
    )
}

