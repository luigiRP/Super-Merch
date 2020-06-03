import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Nombre del producto</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">precio</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">cantidad</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Borrar</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Limpiar Carro </p>
                </div>
            </div>
        </div>
    )
}
