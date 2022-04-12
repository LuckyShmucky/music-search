
import './App.css';
//tools
import React, { useState, useEffect, useRef, Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//context
import { DataContext } from './context/data-context'

//components
import Gallery from './components/gallery'
import SearchBar from './components/search-bar'

//views 
import AlbumView from './views/album-view';
import ArtistView from './views/artist-view';


//App componentSe
function App() {
  
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music!')
  let [data, setData] = useState([])
  

const API_URL = 'https://itunes.apple.com/search?term='


useEffect(()=>{
if(search){

  const fetchData = async () => {
    document.title = `${search}'s Music`
    const response = await fetch(API_URL + search)
    const resData = await response.json()
    console.log("found data:", resData)
   
    if (resData.results.length > 0){
      setData(resData.results)
      setMessage(`found ${search}`)
    } else{
      setMessage('Not Found :(')
    }
  }
  fetchData()
}

}, [search])

const handleSearch = (event, term) => {
  event.preventDefault()
  setSearch(term)
  
}

return (
  <div>
      {message}
    
    <Router>
      <Routes>
        <Route path='/' element={
         <Fragment>
         <SearchBar handleSearch={handleSearch} />
          <DataContext.Provider value={data}>
            <Gallery />
          </DataContext.Provider >
         </Fragment>
        }/>
      <Route path='/album/:id' element={<AlbumView/>}/>
      <Route path='/artist/:id' element={<ArtistView/>} />

      
      
      </Routes>
      </Router>  
  
  </div>
)

}

export default App;






