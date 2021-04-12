import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Head>
      <title>AJID Mada List | Home</title>
    </Head>
   <div>
     <h1 className={styles.title}>AJID Mada</h1>
     <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nobis dolores magnam temporibus
      dignissimos ea aperiam iste, perspiciatis laborum, incidunt unde voluptatum qui
     </p> 
     <p className={styles.text}>Explicabo molestiae ipsam totam hic? Est sint at voluptate atque obcaecati vero explicabo odio harum labore saepe!</p>
  <Link href="/service">
    <a className={styles.btn}>ALL service</a>
  </Link>
 
   </div>
   </>
  )
}
