import React from 'react'

const Compras = ({producto}) => {
    return (
        <div className="my-8 flex justify-between items-center p-2 font-play md:mx-14 md:text-xl">
            <div >
                <img className="h-24 md:h-36" src={producto.img} alt="" />
                <p className="text-xs text-center md:text-lg">{producto.name}</p>
            </div>
            <div>
                <p className="">{producto.q}</p>
            </div>
            <div>
                <p>{producto.total}</p>
            </div>
        </div>
    )
}

export default Compras
