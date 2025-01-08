"use client";

import { CalendarDays } from 'lucide-react'

export default function Schedule() {
    const scheduleItems = [
        { date: '2024-01-11', event: 'DCオケライブマルコム', venue: '渋谷club Malcolm' },
        { date: '2023-01-11', event: 'DCワンコインスタジオライブ', venue: '渋谷mission' },
    ]

    return (
        <section id="schedule" className="py-16 bg-green-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-900">スケジュール</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {scheduleItems.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <CalendarDays className="w-6 h-6 text-green-600 mr-2" />
                                <span className="text-green-800 font-semibold">{item.date}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-green-900">{item.event}</h3>
                            <p className="text-green-700">{item.venue}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

