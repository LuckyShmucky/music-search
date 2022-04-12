// import {useState, useEffect} from "react"
// import { useParams } from "react-router-dom"

// export default function ArtistView(){
//    const {id} = useParams()
//     const [artistData, setArtistData] = useState([])

//     return (
//         <div>
//             <h2>The id was passed {id}</h2>
//             <p>Artist Data</p>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const navigate = useNavigate()  
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
            console.log(resData)
        }
        fetchData()
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album) => {
        return (
            <div key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>    
                <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    const NavButtons = () => {
        return (<div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
        )
    }
    
    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading</h2>}
           
            <NavButtons/>   
            {renderAlbums}
        </div>
    )
    




}
