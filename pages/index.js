import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head1 from '../component/Head'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Main from '../component/Main'


export default function Home() {
  return (
    <div className={styles.container}>
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