import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Navbars from '../comps/Navbars';
import Link from 'next/link';
export default function Home() {
  return (
    <>
   <div>
     <Navbars />
     <div className={styles.container}>
            <h1>SHIPPING</h1>
                    <label className={styles.label}>Adrresse:</label>
                    
                    <input className={styles.input} type="email" required  placeholder="Enter adresse"/>
                  
                    <label className={styles.label}>City:</label>
                    
                    <input className={styles.input} type="password" required placeholder="Enter city" />
                    <label className={styles.label}>Postal Code:</label>
                    
                    <input className={styles.input} type="email" required  placeholder="Enter postal code"/>
                  
                    <label className={styles.label}>Country:</label>
                    
                    <input className={styles.input} type="password" required placeholder="Enter country" />
                   <Link href="/payement">
                    <a className={styles.btns}>CONTINUER</a>
                 </Link>
        </div>
 
   </div>
   </>
  )
}