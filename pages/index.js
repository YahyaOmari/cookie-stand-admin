import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head1 from '../component/Head'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Main from '../component/Main'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-2xl bg-green-100 ">
      <Head1 title='Cookie Stand Admin' >

      </Head1>

      <Header >

      </Header>

      <Main >

      </Main>
      
      <Footer >
        
      </Footer>
    </div>
  )
}