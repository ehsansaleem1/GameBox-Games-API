import './App.css'

import Home from './pages/home'

import GamePage from './pages/games'

import Genres from './pages/genres'

import GenreCateg from './pages/genreCategs'

import DevPage from './pages/developers'

import DescPage from './pages/descpage'

import DevDescPage from './pages/devdesc.jsx'

import PlaDescPage from './pages/platformdesc.jsx'

import Profile from './pages/profile'

import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <main>
      
      <Routes>
        
        <Route index element={<Home />} />
        
        <Route path='/games' element={<GamePage />} />

        <Route path='/genres' element={<Genres />} />
        
        <Route path='/devs' element={<DevPage />} />
        
        <Route path='/genres/:genre' element={<GenreCateg />} />
        
        <Route path='/games/:id' element={<DescPage />} />
        
        <Route path='/genres/:genre/:id' element={<DescPage />} />
        
        <Route path='/devs/:id' element={<DevDescPage />} />
        
        <Route path='/platforms/:id' element={<PlaDescPage />} />

        <Route path='/profile' element={<Profile />} />
        
      </Routes>
    </main>
  )
}
