import './platforms.css'

export default function Platforms(props) {
  const shortenedresp2 = props.platforms.items.slice(0, 3)
  return(
    <main className='main-platforms'>
      <h1>Top Platforms</h1>
      <div className='d-flex'>

      {shortenedresp2.map((plat) => {
      var link =`/platforms/${plat.id}`
        return(
          <div key={plat.slug} className='m-2 platform-card'>
            <img className='img-platform'  src={plat.image_background} />
            <h1 className='pd-2'>{plat.name}</h1>
            <h3 className='pd-2'>Total Games - {plat.games_count}</h3>
            <a href={link}><button className='btn-m mg-2'>View Platform</button></a>
          </div>
        )
      })}
        </div>
      <button className='btn-m m-4'>Load More!</button>
    </main>
  )
}