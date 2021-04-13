import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Navbars from '../comps/Navbars';
import Link from 'next/link';
export default function Home() {
  return (
    <>
   <div>
    
     <div className={styles.container}>
            <h1>SIGN UP</h1>
                    <label className={styles.label}>Name:</label>
                    
                    <input className={styles.input} type="email" required  placeholder="Enter adresse"/>
                  
                    <label className={styles.label}>Email Adresse:</label>
                    
                    <input className={styles.input} type="password" required placeholder="Enter Email Adresse" />
                    <label className={styles.label}>Password :</label>
                    
                    <input className={styles.input} type="email" required  placeholder="Enter Password"/>
                  
                    <label className={styles.label}>Confirm Password:</label>
                    
                    <input className={styles.input} type="password" required placeholder="Confirm Password" />
                   <Link href="/payement">
                    <a className={styles.btns}>REGISTER</a>
                 </Link>
                 Have an account?
                 <Link href="/about">
                    <a className={styles.ao}> Login</a>
                 </Link>
        </div>
 
   </div>
   </>
  )
}