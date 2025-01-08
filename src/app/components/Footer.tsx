export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="font-semibold">&copy; 2024 菜月アイル 非公式 ファンサイト. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#" className="text-green-200 hover:text-yellow-400 mx-2 transition-colors underline">プライバシーポリシー</a>
                    <a href="#" className="text-green-200 hover:text-yellow-400 mx-2 transition-colors underline">お問い合わせ</a>
                </div>
            </div>
        </footer>
    )
}