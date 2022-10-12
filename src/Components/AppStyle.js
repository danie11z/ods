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

    
`

export const H1 = styled.h1`
    font-size: 2vw;

    @media(max-width: 500px){
        font-size: 5vw;
        text-align: center;
        width: 95%;
    }
`

export const P = styled.p`
    width: 80%;
    font-size: 1.3vw;

    @media(max-width: 500px){
        font-size: 2.5vw;
        width: 95%;
    }
`

export const SectionTwo = styled.section`
    display: flex;
    justify-content: space-evenly;

    

`

export const Img = styled.img`
    width: 15vw;
    cursor: pointer;
    @media(max-width: 500px){
        width: 20vw;
    }
`

export const SectionThree = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivOne = styled.div`
    height: 120vh;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media(max-width: 500px){
        height: 130vh;
    }
`

export const DivTwo = styled.div`
    height: 133vh;
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
`

export const DivTwoBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-top: solid 5px #4c9f38;
    border-radius: 5%;
    height: 8vh;
`

export const DivThreeBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-top: solid 5px #c5192d;
    border-radius: 5%;
    height: 8vh;
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
        font-size: 2vw;
    }
`

export const H3 = styled.h3`
    font-size: 1.6vw;

    @media(max-width: 500px){
        font-size: 2.8vw;
    }
`