import './genres.css'

export default function Genres(props) {
  var topgenres= props.genres.items.slice(0,5)
  return(
    <main className='genres-contain'>
      <h1 className='genre-title'>Top Genres</h1>
      <div className='d-flex'>
        {topgenres.map((genre) => {
        var link = `genres/genre=${genre.slug}`
          return(
            <div style={{background: `url(${genre.image_background})`}} key={genre.id} className='genre-card'>
              <a href={link}><h2 className='genre-name'>{genre.name}</h2></a>
            </div>
          )
        })}  
      </div>
      <button className='btn-m'>Load Genres!</button>
    </main>
  )
}