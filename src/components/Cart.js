import React from 'react'
import cartIcon from '../images/icon-cart.svg'
import { useGlobalContext } from '../context'
import CartMenu from './CartMenu'
function Cart() {
    const {total,showCart,setShowCart} = useGlobalContext()
    return (
        <>
        <div className='cart-con' onClick={()=>setShowCart(!showCart)}>
            {total>0?<span className='total'>{total}</span>:''}
            <img src={cartIcon} alt="cart" />
        </div>
        {showCart&&<CartMenu/>}
        </>
    )
}

export default Cart