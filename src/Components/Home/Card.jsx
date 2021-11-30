import {useContext} from 'react'
import StoreContext from '../../Context/StoreContext'

const Card = ({id, name,img,price, product}) => {
    const {dispatch} = useContext(StoreContext)
    return (
        <div className="border-2 border-black rounded-xl m-5 p-3 flex justify-center items-center flex-col">
           <img className="w-52 h-52" src={img} alt={name} /> 
           <h3 className="my-1 font-play font-semibold">{name}</h3>
           <p className="my-2 font-play">${price}</p>
           <button onClick={()=>dispatch({type:"Add", payload:product})} className="my-1 border-black border-2 p-2 rounded-full bg-color4 font-medium font-play hover:bg-color1">Add to Cart</button>
        </div>
    )
}

export default Card
