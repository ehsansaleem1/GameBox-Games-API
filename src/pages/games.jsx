import Navbar from '../components/navbar'
import PostPage from '../components/postbundle.jsx'
import Footer from '../components/footer.jsx'
import {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function GamePage(props) {
  const [games, setGames] = useState({items: [], isLoading: true})
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  useEffect(() => {
    setTimeout(() => {
      async function getGames() {
        try {
          const resp = await fetch("https://api.rawg.io/api/games?page_size=40&key=7468c0691a294985aee336bff6bfef59")

          const jsonresp = await resp.json()

          console.log(jsonresp)

          var newresp = {
            items: jsonresp.results,
            isLoading: false
          }

          setGames(newresp)
        } catch (error) {
          console.log(error)
          
        }
      }

      getGames()
    
    }, 5000)
  }, [])
  return(
    <div>
    {(isAuthenticated) ? <div>
      <Navbar />
      <PostPage content={games} />
      <Footer />
    </div> : <div className='bg-black'>
      <Navbar />
      <h1 className='text-center'>You're logged out! Please Log In</h1>
      <button onClick={() => loginWithRedirect()} className='btn-login m-4'>Login</button></div>}
    </div>
  )
}
