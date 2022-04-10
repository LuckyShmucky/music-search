import React, {useState} from "react";
// import { DataContext } from "../../context/data-context";
// import { SearchContext } from "../../context/search-context";


export default function SearchBar(props){
    // const data = useContext(DataContext)

    let [searchTerm, setSearchTerm] = useState('')
    // const {term, handleSearch} = useContext(SearchContext)
    return (
    <form onSubmit={(event)=> props.handleSearch(event, searchTerm)}>
        <input 
        onChange={(event)=> {
            setSearchTerm(event.target.value)
            props.handleSearch(event, event.target.value)}}
        // onChange={(event)=> setSearchTerm(event.target.value)}
        type="text"
        placeholder="Enter a search term here" 
        />
        {/* <button  onClick={(event)=> handleSearch(event, term.current.value)}>submitMe</button> */}
        <input type="submit"/>
    </form>

    )
}