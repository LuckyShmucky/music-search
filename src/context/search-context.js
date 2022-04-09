import React, {createContext} from "react"

export const SearchContext = createContext({
    term: "",
    handleSearch: ()=>{}
})

