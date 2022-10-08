import React from 'react'
import cartIcon from '../images/icon-cart.svg'
import { useGlobalContext } from '../context'
import ItemImages from './ItemImages'
import { BsXLg } from "react-icons/bs";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
function Item() {
    const {show,setShow,index,setIndex ,number,decrease,total,setTotal,setNumber,currentWindow}=useGlobalContext()
    const checkIndex=(index)=>{
        if(index>3){
            return 0
        }
        if(index<0){
            return 3
        }
        return index
    }
    return (
        <section className='row item'>
            <div className='over' style={{display:`${show?'flex':''}`}}> 
                <BsFillArrowLeftCircleFill className='leftIcon' onClick={()=>setIndex( checkIndex(index-1))} />
                <ItemImages/>
                <BsFillArrowRightCircleFill  className='rightIcon'onClick={()=>setIndex(checkIndex(index+1))} />
            <BsXLg className='exIcon' onClick={()=>{
                console.log(show)
                return setShow(!show)}} /> 
            </div>
            <ItemImages />
            <div className='col-sm-7 item-info'>
                <span className='company'>sneaker company</span>
                <h1>Fall limit edition sneaker</h1>
                <article>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </article>
                <div>
                    <span className='price'>$125.00</span>
                    <span className='sale'>50%</span>
                </div>
                <span className='previous-price'>$250.00</span>
                <div className='btns-con row'>
                    <div className='plus-min-btns col-sm-auto'>
                        <button className='btn' onClick={()=>setNumber(number+1)}>+</button>
                        <span className='num'>{number}</span>
                        <button className='btn' onClick={decrease}>-</button>
                    </div>
                    <button className='btn col-sm-auto' onClick={()=>{
                    setNumber(0) 
                    setTotal(total+number)
                        }}> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" className='cart-icon'/></svg> Add to cart</button>
                </div>
            </div>
        </section>
    )
}

export default Item
