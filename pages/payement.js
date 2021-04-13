
import styles from '../styles/Home.module.css'
import Navbars from '../comps/Navbars';
import Link from 'next/link';
export default function Home() {
  return (
    <>
   <div>
     <Navbars />
     <div className={styles.container}>
            <h1>PAYEMENT METHOD</h1>
                    <label className={styles.label}>Select Method:</label>
                    <br />
                    <input  type="radio" required  placeholder="Enter adresse"/> Paypal or Credit Card
                    <br />
                    <input  type="radio" required  placeholder="Enter adresse"/> Mvola or Credit Card
                    <Link href="/place">
                    <a className={styles.btns}>CONTINUER</a>
                    </Link>
        </div>
 
   </div>
   </>
  )
}