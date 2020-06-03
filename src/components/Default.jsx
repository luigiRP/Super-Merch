import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-10 mx-auto text-center title text-uppercase pt-5">
                        <h1 className="display-3">
                           Error 404
                        </h1>
                        <h1>Página no encontrada</h1>
                        <h3>La pagina con el URL: (<span className='text-danger'>{this.props.location.pathname}</span>) no se encuentra</h3>
                    </div>
                </div>
               
            </div>
        )
    }
}
