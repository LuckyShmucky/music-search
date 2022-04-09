import React, {useState, useContext} from "react";
import { DataContext } from "../../context/data-context";
export default function SearchBar(props){
    const data = useContext(DataContext)

    let [searchTerm, setSearchTerm] = useState('')

    return <div>

    <form onSubmit={(event) => props.handleSearch(event, searchTerm)}>
      
        <input 
        type="text"
        placeholder="Enter a search term here" 
        
        //I believe it has something to do with being able to access
        //or update the data via props
        //setSearchTerm is only changing the term in this component
        //while props.handleSearch is actually inversing the data flow and 
        //updating the search in the parent component
        //ask what the difference between this and the one below is
        onChange={(event) => setSearchTerm(event.target.value)}
        ///setting this for the on change allows us to search something while it is being typed
        // onChange={(event) => props.handleSearch(event, event.target.value)}
        />
        
        <input type="submit" />
    </form>

    </div>
}