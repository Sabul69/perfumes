import {useContext} from 'react'
import Card from '../../Components/Home/Card'
import StoreContext from '../../Context/StoreContext'


const Home = () => {
    const {state} = useContext(StoreContext)
    return (
        <div className="flex items-center justify-center flex-wrap absolute top-20">
            {state.products.map(product=>(
                <Card
                key={product.id}
                id={product.id}
                product={product}
                name={product.name}
                price={product.price}
                img={product.img}/>
            ))}   
        </div>
    )
}

export default Home
