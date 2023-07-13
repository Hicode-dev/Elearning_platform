import Navbar from '../components/Navbar'
import headerImg from './imgs/Background.png'
import Image from 'next/image'
import BlogsCard from '@/components/BlogsCard'

export default function Blog() {
    return (
      <main>
        <Navbar />
      <div className='px-8'>
        <div className='my-10'>
        <Image className = ''
            src={headerImg}
            alt='lop'

            />
        </div>
        <BlogsCard />
     
      </div>
      </main>
    )
  }