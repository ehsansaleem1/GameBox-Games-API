import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './genres.css'
import PostBundle from '../components/postbundle' 
import Tabs from '../components/tabs.jsx'
import {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Genres() {
  const [genres, setGenres] = useState({items: [], isLoading: true})
  const [games, setGames] = useState({items: [], isLoading: true})
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  useEffect(() => {
    setTimeout(()=> {
      async function getGenres() {
        const resp2 = await fetch("https://api.rawg.io/api/genres?key=7468c0691a294985aee336bff6bfef59")

        const jsonresp2 = await resp2.json()

        console.log(jsonresp2)

        var newresp2 = {
          items: jsonresp2.results,
          isLoading: false
        }

        setGenres(newresp2)

        
        
        const resp = await fetch(`https://api.rawg.io/api/games?page_size=25&key=7468c0691a294985aee336bff6bfef59`)

        const jsonresp = await resp.json()

        console.log(jsonresp)

        var newresp = {
          items: jsonresp.results,
          isLoading: false
        }

        setGames(newresp)
      }
      getGenres()
    }, 5000)
  }, [])
function changeQuery(e) {
  window.location.reload()
}
  return(
    <div>
      {(isAuthenticated) ? 
        <div>
          <Navbar />
          <div className='main-genre'>
            <Tabs genres={genres} />
          </div>
  
          <PostBundle content={games}/>
  
          <Footer />
      </div> :  <div className='bg-black'>
          <Navbar />
          <h1 className='text-center'>You're logged out! Please Log In</h1>
          <button onClick={() => loginWithRedirect()} className='btn-login m-4'>Login</button></div>
      }
      
    </div>
  )
}