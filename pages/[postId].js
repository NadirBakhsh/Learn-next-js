import Link from "next/link"
const prosList = ({posts}) => {
    console.log('data', posts   )
    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
      
                <div  style={{maxWidth: 200, padding:10, margin: '0px auto', cursor: 'pointer'}}>
               
                <div style={{padding:10, background: 'green', color: '#fff'}}>
                <h4>{posts.title}</h4>
                <p>{posts.body}</p>
            </div>
           
            </div>
   
        </div>
    )
}

export default prosList

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map((item) => {
        return {
            params:{postId: `${item.id}`}
        }
    }
    )

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}