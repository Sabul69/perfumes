import {useEffect, useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import bag from "../Iconos/carrito.png"
//context
import { useContext } from 'react'
import StoreContext from '../Context/StoreContext'
import Cart from '../Pages/Cart/Cart'


const Header = () => {
    const [ quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState(false)
    const {state} = useContext(StoreContext)
    useEffect(() => {
        setQuantity(state.cart.reduce((accum,item)=>accum + item.q,0))
    }, [state])
    const handleShowCart = () => (
        setCart(!cart)
    )
    return (
        <>
        <header className="bg-color3 w-auto flex justify-between items-center h-16 fixed w-full z-50">
        <div className="mx-10">
        <h1 className="text-center font-bold text-xl font-play lg:text-3xl"><Link to="/">Fragrance</Link></h1>
        </div>
        <div className="w-8 mx-8">
        <p onClick={()=>handleShowCart()} className="bg-color5 text-color2 rounded-full w-5 h-5 text-xs flex justify-center items-center absolute right-5 top-4">{quantity}</p>
        <img onClick={()=>handleShowCart()} src={bag} alt="bag" className="w-8 h-8 cursor-pointer" />
        </div>
        </header>
        {cart&& <Cart handleShowCart={handleShowCart}/> }
        <Outlet/>
        </>
    )
}

export default Header
