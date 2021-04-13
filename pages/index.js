import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Head>
      <title>AJID Mada List | Home</title>
    </Head>
   <div className={styles.containers}>
     <h1 className={styles.title}>SHOPPING CART</h1>
     
  <Link href="/service">
    <a className={styles.btn}>ALL PRODUCTS</a>
  </Link>
 
   </div>
   <div className={styles.containere}>
     <h1>SUBTOTAL</h1>
     <p>$234</p>
     <Link href="/ajoutercart">
       <a className={styles.btn}>PROCED TO CHECKOUT</a>
     </Link>

   </div>

   </>
  )
}
