import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
} from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={ logo } alt="Logo da Dio" />
                    <BuscarInputContainer>
                        <input type="text" placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Faq</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }