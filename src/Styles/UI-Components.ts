import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const SesionDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(8,32,50);
    background: linear-gradient(180deg, rgba(8,32,50,1) 0%, rgba(8,32,50,1) 35%, rgba(22,59,86,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleSesion = styled.h2`
    font-weight: bold;
    font-family: Mulish;
    font-size: 40px;
    letter-spacing: 1px;
    color: #fff;
    width: 100%;
    text-align: center;
`

export const CardForm = styled.form`
    background-color: #082032;
    max-width: 600px;
    height: 700px;
    border: 1px solid #ffffff99;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`

export const InputGroup = styled.div`
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    border-radius: 6px;
    border: none;
    padding: 20px 20px;
    background-color: #04293A;
    color: #fff;
    outline: none;
    margin-bottom: 44px;
    font-family: Montserrat;
`

export const LabelForm = styled.label`
    font-family: Mulish;
    width: 100%;
    color: #fff;
    font-weight: 600;
`

export const SubmitButton = styled.button`
    background-color: #163B56;
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 6px;
    color: #fff;
    font-family: Montserrat;
    transition: all .2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #06296B;
        font-weight: bolder;
    }
`

export const DontAccount = styled.p`
    font-family: Montserrat;
    color: #fff;
    letter-spacing: 1px;
`

export const Link = styled(RouterLink)`
    font-family: Montserrat;
    color: #ffffff99;
    font-weight: bolder;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover {
        color: #fff;
        font-weight: bolder;
    }
`