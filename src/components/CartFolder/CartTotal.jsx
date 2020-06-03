import React from 'react'
import { Link} from 'react-router-dom'

export default function CartTotal({value}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
                    <Link to='/'>
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                        type='button' 
                        onClick={() => clearCart()}>
                            Limpiar Carro
                            </button>
                    </Link>
                    <h5>
                        <span className="title">
                            Sub-total :
                        </span>
                        <strong>
                            $ {cartSubTotal}
                        </strong>
                    </h5>
                    <h5>
                        <span className="title">
                            Impuesto :
                        </span>
                        <strong>
                            $ {cartTax}
                        </strong>
                    </h5>
                    <h5>
                        <span className="title">
                            Total :
                        </span>
                        <strong>
                            $ {cartTotal}
                        </strong>
                    </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
