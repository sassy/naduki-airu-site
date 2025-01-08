import Image from 'next/image'

export default function Discography() {
    const albums = [
        { title: 'Little by Little', releaseDate: '2022-07-20', imageUrl: '/nazuki-l.jpg' },
        { title: 'B side U', releaseDate: '2015-01-15', imageUrl: '/nazuki-b.jpg' },
        { title: 'Go my way', releaseDate: '2012-06-27', imageUrl: '/placeholder.svg?height=300&width=300' },
    ]

    return (
        <section id="discography" className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-900">ディスコグラフィー</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {albums.map((album, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-200">
                            <Image
                                src={album.imageUrl}
                                alt={album.title}
                                width={300}
                                height={300}
                                className="w-full h-auto rounded-md mb-4 shadow-sm"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-green-800">{album.title}</h3>
                            <p className="text-green-600">{album.releaseDate} リリース</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

