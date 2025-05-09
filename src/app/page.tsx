import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
      </main>
    </>
  );
}
