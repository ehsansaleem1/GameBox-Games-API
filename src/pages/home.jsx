import Navbar from '../components/navbar' 

import PostBundle from '../components/postbundle' 

import Carousel from '../components/carousel'

import Genres from '../components/genres'

import Devs from '../components/devs'

import Platforms from '../components/platforms'

import Footer from '../components/footer.jsx'

import {useState, useEffect} from 'react'

export default function Home() {
  const [games, setGames] = useState({items: [], isLoading: true})
  
  const [genres, setGenres] = useState({items: [], isLoading: true})
  
  const [devs, setDevs] = useState({items: [], isLoading: true})
  
  const [platforms, setPlatforms] = useState({items: [], isLoading: true})

  useEffect(() => {
    
    setTimeout(() => {
      
      async function getGames() {
        
          try {
            const resp = await fetch(`https://api.rawg.io/api/games?key=7468c0691a294985aee336bff6bfef59`)

            const jsonresp = await resp.json()
            
            console.log(jsonresp)
            
            var newresp = {
              items: jsonresp.results,
              isLoading: false
            }
            
            setGames(newresp)

             const resp2 = await fetch(`https://api.rawg.io/api/genres?key=7468c0691a294985aee336bff6bfef59}`)
            
            const jsonresp2 = await resp2.json()
            
            console.log(jsonresp2)
            
            var newresp2 = {
              items: jsonresp2.results,
              isLoading: false
            }
            
            setGenres(newresp2)

            const resp3 = await fetch(`https://api.rawg.io/api/developers?key=7468c0691a294985aee336bff6bfef59`)
            const jsonresp3 = await resp3.json()
            console.log(jsonresp3)
            var newresp3 = {
              items: jsonresp3.results,
              isLoading: false
            }
            setDevs(newresp3)

            const resp4 = await fetch(`https://api.rawg.io/api/platforms?key=7468c0691a294985aee336bff6bfef59`)
            
            const jsonresp4 = await resp4.json()
            
            console.log(jsonresp4)
            
            var newresp4 = {
              items: jsonresp4.results,
              isLoading: false
            }
            
            setPlatforms(newresp4)
          } catch (err) {
            
              console.log(err)
            
          }
      }

      getGames()
    }, 5000)
      
  }, []);
  return (
    <main>
      <Navbar />
      <Carousel content={games}/>
      <PostBundle content={games}/>
      <Genres genres={genres} />
      <Devs devs={devs} />
      <Platforms platforms={platforms} />
      <Footer />
    </main>
  )
}
