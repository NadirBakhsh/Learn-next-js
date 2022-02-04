import Link from "next/link"
const prosList = ({posts}) => {
    console.log('data', posts   )
    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {posts.map((item, index) => {
            return (
                <div style={{maxWidth: 200, padding:10, margin: '0px auto', cursor: 'pointer'}}>
            <Link key={item.id} href={`${item.id}`} passHref>
            <div style={{padding:10, background: 'green', color: '#fff'}}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
            </Link>
            </div>
            )
        })}
        </div>
    )
}

export default prosList

export async function getStaticProps(context) {
    const { params} = context
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}