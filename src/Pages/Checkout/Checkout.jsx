import {useContext} from 'react'
import Compras from '../../Components/Checkout/Compras'
import StoreContext from "../../Context/StoreContext"
const Checkout = () => {

    const {state} = useContext(StoreContext)
    const handlePayment= ()=>{
        alert("Pagina de prueba")
    }

    return (
        <div className="absolute top-20 w-full flex flex-col justify-between">
            <h2 className="font-play font-semibold text-3xl border-b-2">Revisa tu pedido</h2>
            <div className="font-play flex justify-between w-full p-3 border-b-4">
                <p className="w-4/12">Producto</p>
                <p className="w-3/12">Unidades</p>
                <p className="w-2/12 md:w-1/12">Subtotal</p>
            </div>
           {state.cart.map(producto=>(
            <Compras
            producto={producto}/>
           ))
               } 
            <button onClick={()=>handlePayment()} className="my-4 rounded-xl p-2 bg-color4 border-2">Proceder al pago</button>
        </div>
    )
}

export default Checkout
