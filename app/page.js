import Image from 'next/image';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CaseStudyList from './components/CaseStudyList';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <CaseStudyList />
    </main>
  );
}
