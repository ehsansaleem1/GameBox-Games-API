import './devs.css'

export default function Devs(props) {
  var shortenedres = props.devs.items.slice(0, 3)
  return(
    <main className='main-devs'>
      <h1 className='dev-title'>Top Developers</h1>
      <div className='devs-container d-flex'>
        {shortenedres.map((dev) => {
          var link =`devs/id=${dev.id}`
          return(
            <div className='dev-card' key = {dev.id}>
              <img className='dev-img' src={dev.image_background}/>
              <a href={link}><h2 className='name-dev'>{dev.name}</h2></a>
              <button className='btn-m'><a href={link}>View Profile</a></button>
            </div>
          )
        })}
      </div>
      <a href='/devs'><button className='btn-m'>See More Developers!</button></a>
    </main>
  )
}