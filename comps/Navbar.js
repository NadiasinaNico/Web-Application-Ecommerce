import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

const Navbar = () => {
    return (
        <nav>
        <div className="logo">
        <Image src="/ninja.png" width={35} height={22} />
        AJID Mada
        
            </div>
            <input className={styles.inputs} placeholder="Search Products ..." /> 
            <a className={styles.btnse}>SEARCH</a>
          <Link href="/"><a > AJID MADA</a></Link>
          <Link href="/service"><a>CART</a></Link>
          <Link href="/about"><a>SIGN IN</a></Link>
        
        </nav>
    )
}
export default Navbar;