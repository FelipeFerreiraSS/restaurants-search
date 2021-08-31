import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 350px;
    height: 100vh;
    overflow-y: auto;
` 

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 15px;
`

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const CarroselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weigth: bold;
    line-height: 29px; 
    margin: 16px 0
`