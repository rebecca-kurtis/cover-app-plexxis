import Image from 'next/image';
import Script from 'next/script'
import Head from 'next/head';
import styles from './page.module.scss';
import { Header } from '../../components/Header';
import { WelcomeHeader } from '../../components/WelcomeHeader';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects.js';
import { Footer } from '../../components/Footer';
import { WhyCompany } from '../../components/WhyCompany';
import { WhyMe } from '../../components/WhyMe';
import { Skills } from '../../components/Skills';

export default function Home() {
  let googleUrl = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&family=Shrikhand&display=swap";

  return (
    <div className={styles.main}>
      <Head>
        <title>Rebecca Kurtis Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link href={googleUrl} rel="stylesheet"></link> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async></script>

      </Head>
      <Header></Header>
      <WelcomeHeader></WelcomeHeader>
      <About></About>
      <Projects></Projects>
      <WhyCompany></WhyCompany>
      <WhyMe></WhyMe>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}
