import {useContext} from 'react'
import StoreContext from '../../Context/StoreContext'

const Addproduct = ({name, img, price, quantity, producto }) => {
    const {dispatch} = useContext(StoreContext)
    return (
        <div className="flex justify-between items-center my-6 font-play w-full">
        <img className="h-24 " src={img} alt={name} />  
        <div className="flex flex-col justify-center items-center">
            <p>{name}</p>
            <p>${price}</p>
            <p>Cantidad: {quantity}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p>Cantidad</p>
            <div className="flex mx-5">
                <p className="font-bold cursor-pointer" onClick={()=>dispatch({type:"Less", payload:producto})}>-</p>
                <p className="mx-2">{quantity}</p>
                <p className="font-bold cursor-pointer" onClick={()=>dispatch({type:"Add", payload:producto})}>+</p>
            </div>
            <p onClick={()=>dispatch({type:"Remove", payload:producto})}>Remover</p>
        </div>
        </div>
    )
}

export default Addproduct
