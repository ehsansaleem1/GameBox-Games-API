import {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PostBundle from '../components/postbundle'
import Tabs from '../components/tabs' 
import { useParams, Link, Outlet } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

export default function genreCateg() {
  const [games, setGames] = useState({items: [], isLoading: true})
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  let {genre} = useParams()

  const newquery2 = genre.replace("genre=", "")

  useEffect(() => {
    setTimeout(()=> {
      async function getGenres() {

        const resp = await fetch(`https://api.rawg.io/api/games?genres=${newquery2}&page_size=25&key=API_KEY`)

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
  return (
    <div>
      {(isAuthenticated) ?
        <div>
          <Navbar />

          <h1 className='title-query'>Showing results for {newquery2}</h1>
          <PostBundle content={games} />
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
