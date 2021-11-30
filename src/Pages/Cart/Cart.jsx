import {useContext} from 'react'
import { Link } from 'react-router-dom'
import Addproduct from '../../Components/Cart/Addproduct'

import StoreContext from '../../Context/StoreContext'

const Cart = ({handleShowCart}) => {
    const {state} = useContext(StoreContext)
    return (
        <div className="bg-color6 fixed w-full top-20 h-full flex flex-col items-center z-50 overflow-scroll">
            <h2 className="font-bold text-left w-full">MI CARRITO</h2>
            <hr className="rounded-t-3xl w-full" />
            {state?.cart?.map(producto =>(
                <Addproduct
                key={producto.id}
                img={producto.img}
                name={producto.name}
                quantity={producto.q}
                producto={producto}
                price={producto.price}

                />
            ))}
            <div className="pb-32">
            <h3 className="font-play font-semibold mb-7 pb-3">Total: $ {state.total}</h3>
            <Link to="/Checkout" onClick={()=>handleShowCart()} className="font-bold bg-color4 p-2 rounded-xl border-2 hover:bg-color1">Comprar</Link>
            </div>
        </div>
    )
}

export default Cart
