"use client";

export default function News() {
    const newsItems = [
        { date: '2023-07-15', title: 'xxxxx' },
    ]

    return (
        <section id="news" className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-900 tracking-wider">最新ニュース</h2>
                <ul className="space-y-4">
                    {newsItems.map((item, index) => (
                        <li key={index} className="border-b border-green-200 pb-4 hover:bg-green-100 transition-colors duration-300 p-4 rounded">
                            <span className="text-green-700 font-medium tracking-wide">{item.date}</span>
                            <h3 className="text-xl mt-1 text-green-900 tracking-wide">{item.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

