import React from 'react'

export default function CartItem({item,value}) {

    const {id,title,img,price,total,count} = item;
    const {increment,decrement,remove} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height:'5rem'}} className='img-fluid' alt='img'/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Producto: </span> 
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span> 
                {price}$
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={()=> decrement(id)}>
                    -
                    </span>
                    <span className='btn btn-black mx-1'>
                    {count}
                    </span>
                    <span className="btn btn-black mx-1" onClick={()=> increment(id)}>
                    +
                    </span>
                    
                </div>
                </div>
            </div>

            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => remove(id)}>
                    <i className="fas fa-trash">

                    </i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> Cantidad Total: ${total}</strong>
                
            </div>
            
        </div>
    )
}
