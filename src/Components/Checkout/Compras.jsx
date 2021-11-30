import React from 'react'

const Compras = ({producto}) => {
    return (
        <div className="my-8 flex justify-between items-center p-2 font-play md:mx-14">
            <div >
                <img className="h-20" src={producto.img} alt="" />
                <p className="text-xs text-center">{producto.name}</p>
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
