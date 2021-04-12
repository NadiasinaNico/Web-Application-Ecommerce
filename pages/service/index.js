import styles from '../../styles/service.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();
    return {
        props: { services: data }
    }
}
const Service = ({services}) => {
    return (
        <div>
            <p>AJID Mada Service</p>
            {services.map(service => (
                <Link  href={'/service/' + service.id } key={service.id}>
                <a className={styles.single}>
                    <h3>{ service.title}</h3>
                    <p>{service.body}</p>
                </a>
                </Link>
            ))}
            <p>Math Superieur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nobis dolores magnam temporibus
      dignissimos ea aperiam iste, perspiciatis laborum, incidunt unde voluptatum qui</p>
        </div>

    )
}
export default Service;