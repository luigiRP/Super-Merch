import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonProducts, ButtonAddCart} from './button'


export default class Details extends Component {
    render() {
        return (
            
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title*/}
                            <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted mainFour my-5">
                            <h1>{title}</h1>
                            </div>
                            </div>
                            {/*End Title*/}
                            {/*Product Info */}

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="Product" />
                                </div>

                                {/*Product Text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1> Tipo: {title}</h1>
                                    <h4 className='title text-uppercase text-muted mt-3 mb-2'>
                                        made by: <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className="mainOrange">
                                        <strong>
                                            precio: {price}$
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    Descripción: </p>
                                     <p className="text-muted lead">
                                    {info}
                                    </p>
                                    {/*Buttons */}
                                    <div>
                                    <Link to='/'>
                                        <ButtonProducts>
                                            Regresa a los productos
                                        </ButtonProducts>
                                    </Link>
                                    <ButtonAddCart
                                    disabled={inCart? true:false }
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                      {inCart? 'Ya esta en el carro!': 'Agregar al carro'}
                                    </ButtonAddCart>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
            
        )
    }
}

