import Navbar from '../components/navbar'
import Footer from '../components/footer' 
import { useParams} from "react-router-dom"
import { useState, useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";

export default function DevDescPage() {

  const[details, setDetails] = useState({item: [], isLoading: true})

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  let {id} = useParams()

  const newquery2 = id.replace("id=", "")

  useEffect(() => {
    setTimeout(() => {
      async function getDetails() {
        const resp = await fetch(`https://api.rawg.io/api/platforms/${newquery2}?key=API_KEY`)

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

  var back_url = {background: `url(${details.item.image_background})`}

  return (
    <div>
      {(isAuthenticated) ? 
        <div>
         <Navbar />
          <div className="details-container">
            <div className='img-contain'><img className='game-img' src={details.item.image_background} /></div>
            <div className='info-game'>
              <h1>{details.item.name}</h1>
              <h1>Game ID - {details.item.id}</h1>
              <h1>Games Developed - {details.item.games_count}</h1>
              <h1>Slug - {details.item.slug}</h1>

              {(details.item.description != "") ? <h1>{details.item.description}</h1> : <h1>No Description Available</h1>}


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
