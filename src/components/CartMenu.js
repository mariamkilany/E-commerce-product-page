import React from 'react'
import { useGlobalContext } from '../context'
import product1 from '../images/image-product-1.jpg'
import { RiDeleteBin5Fill} from "react-icons/ri";
function CartMenu() {
    const {total,setTotal}=useGlobalContext()
    return (
        <div className='cart-menu'>
        <span className='cart-header'>
            Cart
        </span>
        <div className='cart-content'>
            {total<=0?<span>Your cart is empty</span>:
            <>
                <img src={product1} alt="product" />
                <article className='info'>
                    Fall limit edition sneaker
                    <span >
                        $125 x {total} <span className='total-price'>${total*125}</span>
                    </span>
                </article>
                <RiDeleteBin5Fill className='menu-icon' onClick={()=>setTotal(0)}/>
            </>
            }
        </div>
        {total<=0?'':<button className='btn btn-menu'>Check out</button>}
        </div>
    )
}

export default CartMenu
