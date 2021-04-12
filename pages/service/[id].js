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
        <div>
            <h1>Details Page</h1>
            <p>{service.title}</p>
            <p>{service.body}</p>
            <p>Written by {service.author}</p>
            <p></p>
        </div>
    )
}
export default Details;