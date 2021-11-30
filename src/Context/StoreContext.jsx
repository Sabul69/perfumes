import { createContext, useReducer } from "react"

const StoreContext = createContext()

const StoreProvider = ({children}) =>{
    const initialState = {
    products:[
        {id:1,
        name:"Christian Dior", 
        price:1500 ,
        img:"https://i.pinimg.com/564x/15/73/1e/15731eec298e9ccf1212e61c2c27055b.jpg"
        },
        {id:2,
            name:"Versace", 
            price:1700 ,
            img:"https://i.pinimg.com/564x/96/d5/f6/96d5f6c5758a7b78ab7387d9623b3eac.jpg"
            },
        {id:3,
        name:"Valentina", 
        price:1570 ,
        img:"https://i.pinimg.com/564x/70/31/18/703118d1204db22c3087b13c882e9e40.jpg"
        },
        {id:4,
            name:"GUESS",
            price:1220 ,
            img:"https://i.pinimg.com/564x/cf/bc/02/cfbc02c48c9f7fbec3ab3c0791493dc2.jpg"
            },
        {id:5,
        name:"Femme", 
        price:1900 ,
        img:"https://i.pinimg.com/564x/73/65/32/736532e99a2ee7be1eb6c4380e483155.jpg"
        }
        
    ],
    total:0,
    cart:[]
}

const reducer = (state,action) => {
    switch (action.type) {
        case "Add":
        if((state.cart.findIndex((o)=>{return o.id === action.payload.id}))=== -1){
            const u = {...state, 
                    cart:[...state.cart, {...action.payload, total:action.payload.price, q:1}],    
                }
            const t = u.cart.reduce((counter, item) => counter + item.total,0)
            const update = {...u, total:t}
            return update
            }
        else{
            const index = state.cart.findIndex((o)=>{return o.id === action.payload.id})
            const a = state.cart.map((product, i)=>{
                if (index === i) {
                    return {...product, total: product.total+product.price, q: product.q +1}
                } else {
                    return product
                }
            })
            return {...state, 
                    cart: a,
                    total:a.reduce((counter, item) => counter + item.total,0)    
                }
        }

        case "Less":
            if (action.payload.q === 1) {
                return state
                
            } else {
                    const index = state.cart.findIndex((o)=>{return o.id === action.payload.id})
                const a = state.cart.map((product, i)=>{
                    if (index === i) {
                        return {...product, total: product.total-product.price, q: product.q -1}
                    } else {
                        return product
                    }
                })
                return {...state, 
                        cart: a,
                        total:a.reduce((counter, item) => counter + item.total,0)    
                    }
                
            }

        case "Remove":
            const update = state.cart.filter(product=>product.id !== action.payload.id)
            return{...state,
                    cart: update,
                    total:update.reduce((counter, item) => counter + item.total,0) } 
        
        default:
         return state   
    }
}

    const [state, dispatch] = useReducer(reducer, initialState)
    const data={state, dispatch}
    return(
    <StoreContext.Provider value={data}>
    {children}
    </StoreContext.Provider>)
}



export {StoreProvider}
export default StoreContext