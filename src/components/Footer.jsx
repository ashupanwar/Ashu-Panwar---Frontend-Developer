import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import background from '../images/background.jpeg'

const Container = styled.div`
    width: 100vw;
    height: 200px;
    color: white;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Wrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: auto auto;
    display: flex;
    align-item: space-between;
    flex-direction: column;
`;
const Left = styled.div`
    font-size: 200;
    margin-top: 10px;
`;
const Right = styled.div`
    height: 150px;
    margin: 0 auto;
`;

const Logo = styled.div`
    width: 550px;
    height: 150px;
    background-image: url(${logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 200px;
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            
            <Right>
                <Logo/>
            </Right>
            <Left>
                Made By Ashu Panwar
            </Left>
        </Wrapper>
    </Container>
  )
}

export default Footer