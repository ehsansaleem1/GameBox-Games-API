import './footer.css'

export default function Footer() {
  return(
    <main className='footer-main'>
      <div className='upper-footer'>
        <h1 className='head-footer'>Explore The World of Games!</h1>
        <h4 className='sub-head'>There are two types of companies: hoarders and givers. RAWG is the largest video game database and game discovery service. And we are gladly sharing our 500,000+ games, search, and machine learning recommendations with the world. Learn what the RAWG games database API can do and build something cool with it!</h4>
        <a href='/games'><button className='btn-m m-4'>Explore</button></a>
      </div>
      <div className='lower-footer-copyright'>
        <h3>Copyright © 2022 - 2023 - All Rights Reserved</h3>
      </div>
    </main>
  )
}