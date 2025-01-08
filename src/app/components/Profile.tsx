"use client";

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


export default function Profile() {
    return (
        <section id="profile" className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-900">プロフィール</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/3">
                        <Image
                            src="/nazuki-l.jpg"
                            alt="菜月アイル"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-4 text-green-800">菜月アイル（なづきあいる）</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700">
                            <div>
                                <p><strong>ニックネーム：</strong>アイアイ</p>
                                <p><strong>生年月日：</strong>6月27日</p>
                                <p><strong>出身地：</strong>神奈川県</p>
                                <p><strong>身長：</strong>162センチ</p>
                            </div>
                            <div>
                                <p><strong>スリーサイズ：</strong></p>
                                <p>B：78センチ</p>
                                <p>W：58センチ</p>
                                <p>H：87センチ</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-2 text-green-800">趣味・特技</h4>
                            <ul className="list-disc list-inside text-green-700">
                                <li>趣味：腹筋、キックボクシング</li>
                                <li>特技：モノマネ・書道</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold mb-2 text-green-800">SNS</h4>
                            <a href="https://x.com/aiaichan20" className="mr-2">
                                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/nazuki_airu/" className="mr-2"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6" /></a>
                            <a href="https://www.youtube.com/@nazukiairu0627" className="mr-2"><FontAwesomeIcon icon={faYoutube} className="w-6 h-6" /></a>
                            <a href="https://www.tiktok.com/@aiaichan627" className="mr-2"><FontAwesomeIcon icon={faTiktok} className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

