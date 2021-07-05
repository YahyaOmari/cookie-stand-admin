
import Head from 'next/head'
import Header from '../component/Header'
import Main from '../component/Main'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-2xl bg-green-100 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>

    </div>)}