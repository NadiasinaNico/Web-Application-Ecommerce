import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8000/blogs')
    const data = await res.json();
    const paths = data.map(service => {
        return {
            params: {id : service.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:8000/blogs/' +id);
    const data = await res.json();
    return {
        props: {service: data }
    }
}
const Details = ({service}) => {
    return (
        <>
        
        <Link href="/service">
            <a className={styles.btns}>GO BACK</a>
        </Link>
        <div>
        <div className={styles.containeres}>
            <Image src="/product_9.jpg" width={220} height={250} />
            <p>{service.title}</p>
            <p>{service.body}</p>
            <p>{service.price}</p>
            <p>Written by {service.author}</p>
            <Link href="/ajoutercart">
            <a className={styles.btns}>ADD CART</a>
        </Link>
        </div>
        
        <div className={styles.containerees}>
            <h2>ORDER SUMMARY</h2>
            <p>Price: $2345</p>
            <hr />
            <p>Status: In Stock</p>
            <hr />
           Qté:
           <select className={styles.bt}>
               <option>1</option>
               <option>2</option>
               <option>3</option>
           </select>
                   <Link href="/payement">
                    <a className={styles.btns}>ADD To Cart</a>
                 </Link>
        </div>
        </div>
        </>
        
    )
}
export default Details;