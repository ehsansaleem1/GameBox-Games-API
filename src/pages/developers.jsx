import Navbar from '../components/navbar'
import PostPage from '../components/postbundle.jsx'
import Footer from '../components/footer.jsx'
import {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function DevPage() {
  const [devs, setDevs] = useState({items: [], isLoading: true})
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  useEffect(() => {
    setTimeout(() => {
      async function getDevs() {
        try {
          const resp = await fetch("https://api.rawg.io/api/developers?page_size=40&key=7468c0691a294985aee336bff6bfef59")

          const jsonresp = await resp.json()

          console.log(jsonresp)

          var newresp = {
            items: jsonresp.results,
            isLoading: false
          }

          setDevs(newresp)
        } catch (error) {
          console.log(error)

        }
      }

      getDevs()

    }, 5000)
  }, [])
  return(
    <div>
    {(isAuthenticated) ? 
      <div>
        <Navbar />
        <main className='posts-main'>
          <h1 className='title-posts'>Popular Developers</h1>
          {devs.items.map((post) => {
        var link =`devs/${post.id}`
            return(
              <div key={post.id} className='post-container'>
                <img className='img-post' src=        {post.image_background}/>
                <div className='post-dev'>
                  <h1 className='title-dev'>{post.name}</h1>
                  <h3 className='title-dev'>Dev Id - {post.id}</h3>
                  <h3 className='title-dev'>Total Games Developed - {post.games_count}</h3>
                  <h1>Games Developed - </h1>
                  <ol className='ordered'>
                    {post.games.map((game) => {
                      return(
                        <div  key={game.slug}>
                          <li className='list-item'>{game.name}</li>

                        </div>
                      )
                    })}
                  </ol>
                  <a href={link}><button className='btn-m'>See Dev Review</button></a>
                </div>
              </div>
            )
          })}
          <button className='btn-m'>Load More!</button>
        </main>
        <Footer />
      </div>
      : 
    <div className='bg-black'>
      <Navbar />
      <h1 className='text-center'>You're logged out! Please Log In</h1>
      <button onClick={() => loginWithRedirect()} className='btn-login m-4'>Login</button></div>}
    </div>
    
  )
}
