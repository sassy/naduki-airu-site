"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Discography from './components/Discography';
import Schedule from './components/Schedule';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/*<News / >*/}
        <Discography />
        <Schedule />
        <Profile />
      </main>
      <Footer />
    </div>
  );
}
