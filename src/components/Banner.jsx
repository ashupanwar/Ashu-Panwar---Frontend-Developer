import React from 'react'
import background from '../images/background.jpeg'
import rocket from '../images/rocket.png'
import moon3 from '../images/moon2.png'
import mars from '../images/mars.png'
import saturn from '../images/saturn.png'
import styled, { keyframes } from 'styled-components'

const rocketAnimation = keyframes`
 0% { transform: translate(0px, 0px) }
 100% { transform: translate(1500px, -650px) }
`

const moonAnimation = keyframes`
  from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
`
const marsAnimation = keyframes`
  from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  to   { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
`
const saturnAnimation = keyframes`
  from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
  to   { transform: rotate(-360deg) translateX(70px) rotate(360deg); }
`


const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  display: flex;
  justify-content: center;
  align-item: center;
`

const Center = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  margin: auto 0;
  position: relative;
  transform: translateY(50px);
  z-index:10;
`

const TopText = styled.h1`
  color: white;
  font-weight: 800;
  font-size: 200px;
  padding:0;
  margin:0;
  position: absolute;
  text-shadow: 2px 2px #ff0000;
`

const Rocket = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${rocket});
  position: absolute;
  left: -200px;
  bottom: -50px;
  background-size: contain;
  background-repeat: no-repeat;
  filter: drop-shadow(-10px 0px 8px #000000);
  z-index: 5;
  animation: ${rocketAnimation} 30s linear infinite;
`
//

const Moon = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${moon3});
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: -50px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
  filter: drop-shadow(-10px 0px 8px #000000);
  animation: ${moonAnimation} 100s linear infinite;
`
const Mars = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${mars});
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 400px;
  bottom: 0px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
  filter: drop-shadow(-10px 0px 8px #000000);
  animation: ${marsAnimation} 250s linear infinite;
`
const Saturn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${saturn});
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 300px;
  bottom: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 4;
  filter: drop-shadow(-10px 0px 8px #000000);
  animation: ${saturnAnimation} 300s linear infinite;
`
//


const LiftOffStyles = {
  marginTop: '120px', 
  marginLeft: '-20px',
}
const LiftOffStyles2 = {
  marginTop: '120px', 
  marginLeft: '-20px',
  textShadow: '-6px -6px 16px #000000'
}

const Banner = () => {
  return (
    <Container>

      <Center>
        <TopText>LIFT</TopText>
        <TopText style={LiftOffStyles}>OFF</TopText>
        <TopText style={LiftOffStyles2}>OFF</TopText>
      </Center>

      <Rocket/>
      <Moon/>
      <Mars/>
      <Saturn/>
      


    </Container>
  )
}

export default Banner