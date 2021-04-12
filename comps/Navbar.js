import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
        <div className="logo">
        <Image src="/ninja.png" width={35} height={22} />
        AJID Mada
            </div>
            
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/service"><a>Service</a></Link>
        
        </nav>
    )
}
export default Navbar;