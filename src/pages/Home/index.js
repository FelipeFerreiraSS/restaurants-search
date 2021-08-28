import React from 'react';
import { Container, Search } from './styles';

import logo from '../../assets/logo.svg'

const Home = () => (
    <Container>
        <Search>
            <img src={logo} alt="Logo"></img>
            Olá Mundo!!!
        </Search>
    </Container>
)

export default Home