import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import MiddleBanner from '@/components/MiddleBanner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
    <div className='px-8'>
    <HeroBanner />
    <MiddleBanner />
    </div>
    </main>
  )
}
