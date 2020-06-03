import styled from 'styled-components';

export const ButtonCart = styled.button `
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 5px;
    color: var(--mainFive);
    transition: linear 150ms;
    &:hover {
        color: white;
        border: 2px solid white;
    }
    &:focus {
        outline:none;
    }
`
export const ButtonProducts = styled.button `
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 2px solid #ccc;
border-radius: 5px;
color: var(--mainFive);
transition: linear 150ms;
&:hover {
    background-color: var(--mainFive);
    color: white;
    border: 2px solid white;
}
&:focus {
    outline:none;
}
`

export const ButtonAddCart = styled.button `
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 2px solid #ccc;
border-radius: 5px;
color: var(--mainOne);
transition: linear 150ms;
&:hover {
    background-color: var(--mainOne);
    color: white;
    border: 2px solid white;
}
&:focus {
    outline:none;
}
`



