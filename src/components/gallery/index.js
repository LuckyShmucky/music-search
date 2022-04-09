import GalleryItem from '../gallery-item/index'
import { useContext } from 'react'
import {DataContext} from "../../context/data-context.js"

function Gallery(){
    const data = useContext(DataContext)
const display = data.map((item, index)=>{
    return (
            <GalleryItem item={item} key={index} />
   )
})

return(
    <div>
        {display}
    </div>
)

}

export default Gallery
