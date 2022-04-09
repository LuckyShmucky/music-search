import React, {useState, useContext} from "react";
import { DataContext } from "../../context/data-context";
import { SearchContext } from "../../context/search-context";


export default function SearchBar(){
    const data = useContext(DataContext)

    let [searchTerm, setSearchTerm] = useState('')
    const {term, handleSearch} = useContext(SearchContext)
    return <div>

    <form >
        <input 
        ref={term}
        type="text"
        placeholder="Enter a search term here" 
        />
        <button  onClick={(event)=> handleSearch(event, term.current.value)}>submitMe</button>
        <input type="submit" />
    </form>

    </div>
}