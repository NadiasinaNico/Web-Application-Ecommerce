import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const About = () => {
    return(
        <>
        <Head>
          <title>AJID Mada List | About</title>
        </Head>
        <div className={styles.container}>
            <h1>SIGN IN</h1>
                    <label className={styles.label}>Email Adresse:</label>
                    <br />
                    <input className={styles.input} type="email" required placeholder="Enter Email"/>
                    <br />
                    <label className={styles.label}>Password:</label>
                    <br />
                    <input className={styles.input} type="password" required placeholder="Enter Password"/>
                    <br />
                    <Link href="/ajoutercart">
                    <a className={styles.btns}>SIGN IN</a>
                    </Link>
                    New Customer?
                    <Link href="/register">
                        <a className={styles.ao}> Register</a>
                    </Link>
        </div>
        </>
    )
}
export default About;