import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Wrapper from './sections/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div className='main-contianer'>
      <div className='app'>
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  )
}
