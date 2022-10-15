import {createGlobalStyle} from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SectionOne = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 30vh;

    @media(max-width: 500px){
        height: 55vh;
    }

    
`

export const H1 = styled.h1`
    font-size: 2vw;
    font-family: 'Lato', sans-serif;

    @media(max-width: 500px){
        font-size: 6.8vw;
        text-align: center;
        width: 95%;
    }
`

export const P = styled.p`
    width: 80%;
    font-size: 1.3vw;
    font-family: 'Lato', sans-serif;

    @media(max-width: 500px){
        font-size: 3.5vw;
        width: 95%;
    }
`

export const SectionTwo = styled.section`
    display: flex;
    justify-content: space-evenly;

    @media(max-width: 500px){
        height: 27vh;
        align-items: center;
    }

`

export const Img = styled.img`
    width: 12vw;
    cursor: pointer;
    @media(max-width: 500px){
        width: 30vw;
    }
`

export const SectionThree = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Div = styled.div`
    height: 63vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const DivOneBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-top: solid 5px #dda83a;
    border-radius: 5%;
    height: 8vh;

    @media(max-width: 500px){
        height: 7vh;
    }
`

export const DivTwoBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-top: solid 5px #4c9f38;
    border-radius: 5%;
    height: 8vh;

    @media(max-width: 500px){
        height: 7vh;
    }
`

export const DivThreeBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-top: solid 5px #c5192d;
    border-radius: 5%;
    height: 8vh;

    @media(max-width: 500px){
        height: 7vh;
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: solid 3px;
    border-radius: 50%;
    font-size: 1.2vw;
    font-weight: 800;
    width: 3vw;
    height: 5.5vh;
    cursor: pointer;
    transition: color 0.5s;

    &:hover{
        background-color: #FF0000;
        color: #FFFFFF;
    }

    @media(max-width: 500px){
        width: 5vw;
        height: 4vh;
        font-size: 3vw;
        border: none;
        border-radius: 0;
    }
`

export const H3 = styled.h3`
    font-size: 1.6vw;

    @media(max-width: 500px){
        font-size: 4.3vw;
    }
`