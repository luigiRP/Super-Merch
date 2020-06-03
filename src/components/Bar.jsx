import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonCart } from './button'

export default class Bar extends Component {


    render() {

        const styles = {
            height: '80px',
            width: '80px'
        };

       
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">

                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk */}

                <Link to="/">
                    <img src={Logo} alt="logo" className="navbar-brand" style={styles} />
                </Link>

                <ul className="navbar-nav align-items-center" >
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            Productos
                    </Link>
                    </li>
                </ul>

                <Link to='/cart' className="ml-auto">
                    <ButtonCart>
                        <span className='mr-2'>
                            <i className="fas fa-cart-plus" />
                        </span>
                   Mi Carro
                   </ButtonCart>
                </Link>
            </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
background-color: var(--mainOne);

.nav-link {
    color: var(--mainFive) !important;
    font-size: 1.3rem;
    text-transform:capitalize;
    transition: linear 150ms;
}
.nav-link:hover {
    color: white !important;
}
`
;

