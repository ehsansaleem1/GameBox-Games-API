import './postbundle.css'

export default function PostBundle(props) {
  return (
    <main className='posts-main'>
      <h1 className='title-posts'>Popular Games</h1>
      {props.content.items.map((post) => {
      var link = `/games/${post.id}`
        return(
          <div key={post.id} className='post-container'>
            <img className='img-post' src=        {post.background_image}/>
            <div className='post-info'>
              {post.genres.map((genre) => {
            const link = `/genres/genre=${genre.slug}`
                return(
                  <a href={link}><span key={genre.name} className='post-genre'>{genre.name}</span></a>
                )
              })}
              <a href={link}><h1 className='title-post'>{post.name}</h1></a>
              <h3 className='title-post'>Release - {post.released}</h3>
              <h3 className='title-post'>Ratings - {post.rating}</h3>

              {post.stores.map((store, i) => {
                return(
                  <button key={store.store.name} className='shop-btn
                    '><a href={store.store.domain}>{store.store.name}</a></button>
                )
              })}
            </div>
          </div>
        )
      })}
      <button className='btn-m'>Load More!</button>
    </main>
  )
}
