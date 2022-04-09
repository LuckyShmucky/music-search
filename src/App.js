import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import { DataContext } from './context/data-context'
import Gallery from './components/gallery'
import SearchBar from './components/search-bar'



function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for music!')
  let [data, setData] = useState([])

const API_URL = 'https://itunes.apple.com/search?term='

useEffect(() => {
 if(search){
  const fetchData = async () => {
    document.title = `${search} Music`
    const response = await fetch(API_URL + search)
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
}, [search])


const handleSearch = (event, term) => {
  event.preventDefault()
  setSearch(term)
}

return (
  <div>
      {message}
      <DataContext.Provider value={data}>
      <SearchBar handleSearch = {handleSearch} />
      <Gallery />
      </DataContext.Provider >
  </div>
)

}

export default App;






