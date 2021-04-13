import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbars = () => {
    return (
        <>
         <Link href="/service">
            <a className={styles.btns}>GO BACK</a>
        </Link>
        <div className="navbar">
       
          <Link href="/about"><a>Sign In</a></Link>
          <Link href="/ajoutercart"><a>Shipping</a></Link>
          <Link href="/payement"><a>Payement</a></Link>
          <Link href="/place"><a>Place Order</a></Link>
        
        </div>
        </>
    )
}
export default Navbars;