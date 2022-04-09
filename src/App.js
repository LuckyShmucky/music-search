import logo from './logo.svg';
import './App.css';
import React, { useState, useRef} from 'react'
import { DataContext } from './context/data-context'
import { SearchContext } from './context/search-context';
import Gallery from './components/gallery'
import SearchBar from './components/search-bar'



function App() {
  
  let [message, setMessage] = useState('Search for music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

const API_URL = 'https://itunes.apple.com/search?term='




const handleSearch = async (event, term) => {
  event.preventDefault()
  
  const fetchData = async () => {
    document.title = `${term}'s Music`
    const response = await fetch(API_URL + term)
    const resData = await response.json()
    console.log("found data:", resData)
    if (resData.results.length > 0){
      setData(resData.results)
    } else{
      setMessage('Not Found :(')
    }
  }
  fetchData()
}

return (
  <div>
      {message}
      <DataContext.Provider value={data}>
     <SearchContext.Provider value={{
       term: searchInput,
       handleSearch,
     }}>
      <SearchBar/>
     </SearchContext.Provider>
      <Gallery />
      </DataContext.Provider >
  </div>
)

}

export default App;






