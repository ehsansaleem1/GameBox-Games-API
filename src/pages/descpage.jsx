import Navbar from '../components/navbar'
import Footer from '../components/footer' 
import { useParams} from "react-router-dom"
import { useState, useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";

export default function DescPage() {

  const[details, setDetails] = useState({item: [], isLoading: true})

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  let {id} = useParams()

  const newquery2 = id.replace("id=", "")

  useEffect(() => {
    setTimeout(() => {
      async function getDetails() {
        const resp = await fetch(`https://api.rawg.io/api/games/${newquery2}?key=7468c0691a294985aee336bff6bfef59`)

        const jsonresp = await resp.json()

        var newresp = {
          item: jsonresp,
          isLoading: false
        }

        console.log(jsonresp)

        setDetails(newresp)
      }

      getDetails()
    }, 5000)
  }, [])

  var back_url = {background: `url(${details.item.background_image})`}
                   
  return (
    <div>
      {(isAuthenticated) ? 
        <div>
         <Navbar />
          <div className="details-container">
            <div className='img-contain'><img className='game-img' src={details.item.background_image} /></div>
            <div className='info-game'>
              <h1>{details.item.name}</h1>
              <h1>Game ID - {details.item.id}</h1>
              <h1>Released Date - {details.item.released}</h1>
              <h1>Ratings - {details.item.rating}</h1>
              <h2>{details.item.description_raw}</h2>
              <h1>Ratings by Users - </h1>
              <div>
                {(details.item.ratings)?details.item.ratings.map((rating) => {
                return (
                  <button key={rating.id} className='shop-btn'>{rating.title} - {rating.percent}%</button>
                )
              }):<h1>No Ratings Yet</h1>}
              </div>

              <h1  className='contain'>Buy Game - </h1>
              <div>
                {(details.item.stores)?details.item.stores.map((shop) => {
                return (
                  <button key={shop.store.id} className='shop-btn'><a href={shop.store.domain}>{shop.store.slug}</a></button>
                )
              }):<h1>No Shops Yet to purchase</h1>}
              </div>

              <button className='mgt-2'><a href={details.item.website}>{details.item.website}</a></button>
            </div>
          </div>
         <Footer />
        </div>
        :
        <div className='bg-black'>
          <Navbar />
          <h1 className='text-center'>You're logged out! Please Log In</h1>
          <button onClick={() => loginWithRedirect()} className='btn-login m-4'>Login</button></div>
      }
      
    </div>
  )
}
