import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'


const Wapper = styled.div`
    width: 100vw;
    height: 80px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: black;
    padding: 0px 40px;
    display: flex;
    align-item: center;
    justify-content: space-between;
`

const Logo = styled.div`
    width: 140px;
    height: 60px;
    background-image: url(${logo});
    background-size: cover;
    background-position: left;
    margin: auto 0px;
`

const UL = styled.ul`
    color: white;
    list-style: none;
    display: flex;
`

const LI = styled.li`
    margin: auto 0;
    margin-left: 40px;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    transition: color 0.2s ease;

    &:hover {
        color: #d40202;
        
    }

    
`

const Navbar = () => {
  return (
    <div>
        <Wapper>
            <Container>
                <Logo/>
                <UL>
                    <LI>Home</LI>
                    <LI>Rockets</LI>
                    <LI>Contact</LI>
                </UL>
            </Container>
        </Wapper>
    </div>
  )
}

export default Navbar