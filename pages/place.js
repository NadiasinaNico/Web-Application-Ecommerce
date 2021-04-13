import styles from '../styles/Home.module.css'
import Navbars from '../comps/Navbars';
import Link from 'next/link';
export default function Home() {
  return (
    <>
   <div>
     <Navbars />
     <div className={styles.containers}>
            <h1>SHIPPING</h1>
            <p>Adresse: Andraisor Antananarico</p>
            <hr />
            <h2>PAYEMENT METHOD</h2>
            <p>Method: Paypal</p>
            <hr />
            <h2>ORDERS ITEMS</h2>
            <p>liste de produit</p>
                   <Link href="/payement">
                    <a className={styles.btns}>CONTINUER</a>
                 </Link>
        </div>
        <div className={styles.containere}>
            <h2>ORDER SUMMARY</h2>
            <p>Items: $2345</p>
            <hr />
            <p>Shipping: $2333</p>
            <hr />
            <p>Tax: $20%</p>
            <p>Total:</p>
                   <Link href="/payement">
                    <a className={styles.btns}>Place ORDER</a>
                 </Link>
        </div>
 
   </div>
   </>
  )
}