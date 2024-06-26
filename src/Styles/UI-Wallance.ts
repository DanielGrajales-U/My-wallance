import styled from "styled-components";

export const UserNameShow = styled.h3`
    width: 100%;
    color: #fff;
    font-family: Mulish;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 25px;
    margin-left: 20px;
`

export const AmountShow = styled.p`
    width: 100%;
    color: #FBC02D;
    font-family: Montserrat;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 40px;
    text-align: center;
    margin: 30px 0;
`

export const HistoryIcon = styled.svg`
    transition: all .4s ease-in-out;
    &:hover{
        cursor: pointer;
        transform: rotate(360deg);
        fill: #fff;
    }
`

export const BackIcon = styled.svg`
    &:hover{
        cursor: pointer;
        fill: #fff;
    }
`

export const BackButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
`

export const DateHistory = styled.span`
    width: 100px;
    color: aliceblue;
    letter-spacing: 2px;
    font-family: Mulish;
    font-weight: bolder;
`

export const MoreDetails = styled.div`
    width: 400px;
    display: flex;
    flex-wrap: wrap;
`

export const Description = styled.p`
    width: 70%;
    color: #FBC02D;
    font-family: Montserrat;
    font-weight: 600;
`

export const Ammount = styled.p`
    width: 30%;
    text-align: right;
    font-family: Montserrat;
    font-weight: 600;
`