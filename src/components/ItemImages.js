import React from 'react'
import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import { useGlobalContext } from '../context'
function ItemImages() {
    const {index,setIndex,show,setShow} = useGlobalContext()
    const productImages=[product1 ,product2,product3,product4]
    const thumbnails=[thumbnail1,thumbnail2,thumbnail3,thumbnail4]
    return (
        <div className='col-sm-5'>
            <div className='activeImg' onClick={()=>{setShow(!show)}}><img src={productImages[index]} alt="activeImg" /></div>
            <div className='thumbs'>
                {thumbnails.map((thumb,thIndex)=> <div key={thIndex} style={{backgroundImage:`${index===thIndex ?'linear-gradient(rgb(255 237 224 / 61%), rgb(255 237 224 / 61%)),':''}url(${thumb})`}} className={`${index===thIndex ?'clicked':''}`} onClick={()=>setIndex(thIndex)} /> )}
            </div>
        </div>
    )
}

export default ItemImages
