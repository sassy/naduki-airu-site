"use client"

import './globals.css'
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <title>菜月アイル ファンサイト</title>
      <meta name="description" content="菜月アイル公式ファンサイト - 最新情報、ディスコグラフィー、ライブ情報など" />
      <body className={`${notoSansJP.className} bg-green-50`}>
        <div className={zenKaku.className}>
          {children}
        </div>
      </body>
    </html>
  )
}
