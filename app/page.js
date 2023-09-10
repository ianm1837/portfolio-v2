"use client"
import Image from 'next/image';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CaseStudyList from './components/CaseStudyList';
import ContactForm from './components/ContactForm';
import WaveBanner from './components/WaveBanner';

export default function Home() {
  return (
    <main className="">
      <div className="container m-auto max-w-screen-xl">
        <Nav />
        <Hero />
      </div>
        <WaveBanner />
      <div className='container m-auto max-w-screen-xl'>

        <CaseStudyList />
        <ContactForm />
      </div>
    </main>
  );
}
