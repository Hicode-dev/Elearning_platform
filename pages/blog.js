import Navbar from '../components/Navbar'
import headerImg from './imgs/Background.png'
import Image from 'next/image'

export default function Blog() {
    return (
      <main>
        <Navbar />
      <div className='px-8'>
        <div className='mt-28'>
        <Image className = ''
            src={headerImg}
            alt='lop'

            />
        </div>
     
      </div>
      </main>
    )
  }