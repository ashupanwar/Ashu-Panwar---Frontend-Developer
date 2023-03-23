import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Container = styled.div`
  width: 100vw;
  height: 400px;
  color: white;
  display: flex;
  justify-content: center;
  padding: 60px 0; 
`;

const Wrapper = styled.div`
  width: 60%;
  height: auto;
  color: white;
  background-color: transparent;
  
`; 

const Card = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  aligin-item: center;
  border-bottom: 1px solid rgba(88, 88, 88, 0.8);
`

const Image = styled.img`
  height: 70px;
  width: 70px;
  background-color: transparent;
  margin: auto 0;
  border-radius: 10px;
`;

const Title = styled.div`
  margin: auto 16px;
`;

const Left = styled.div`
  display: flex;
  align-item: center;
  flex: 1;
`;
const Right = styled.div`
  height: 100%;
  width: 80px;
  padding: auto 0;
`;

const View = styled.div`
  background-color: #d40202;
  border-radius: 30px;
  margin-top: 30px;
  padding: 10px 40px;
  display: flex;
  align-item: center;
  justify-content: center;
  cursor: pointer;
`;

const PaginationButtonWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
`;

const Button = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-left: 6px;
  cursor: pointer;
`;

const Span = styled.span`
  margin: auto auto;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 300,
  bgcolor: 'black',
  border: '1px solid black',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  outline: 'none',
};

const PopUpImage = styled.img`
  width: 300px;
  height: 300px;
  background-color: transparent;
  border-radius: 20px;

`;

const PopUpLeft = styled.div`
  height: 300px;
  width: 300px;
`;
const PopUpRight = styled.div`
  height: 300px;
  width: 300px;
  background-color: transparent;
  padding: 0 20px;
`;

const PopUpTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;
const PopUpDescription = styled.div`
  color: white;
  font-weight: 200;
  margin-top: 10px;

`;

const MyDataGrid = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selected, setSelected] = useState();

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  useEffect(()=>{
    
  },[start,end])
  



  const handleNext = ()=>{
    if(end<props.listOfRockets.length){
      setStart(start+3);
      setEnd(end+3);
    }
  }
  const handlePrev = ()=>{
    if(start-3 >= 0){
      setStart(start-3);
      setEnd(end-3);
    }
  }

  const handleView = (rocket)=>{
    setSelected(rocket);
    console.log(rocket);
    handleOpen();
  }

  

  return (
    <Container>
      <Wrapper>
        <PaginationButtonWrapper>
          <Button onClick={handlePrev}><Span>&lt;</Span></Button>
          <Button onClick={handleNext}><Span>&#62;</Span></Button>
        </PaginationButtonWrapper>
        {props.listOfRockets.slice(start,end).map(rocket=>(
            <Card key={rocket.id}>
              <Left>
                <Image src={rocket.flickr_images[0]}/>
                <Title>{rocket.rocket_name}</Title>
              </Left>
              <Right>
                <View onClick={()=>{handleView(rocket)}}>View</View>
              </Right>
            </Card>
        ))}
        

      </Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PopUpLeft>
            <PopUpImage src={selected?.flickr_images[0]}></PopUpImage>
          </PopUpLeft>
          <PopUpRight>
            <PopUpTitle>{selected?.rocket_name}</PopUpTitle>
            <PopUpDescription>{selected?.description}</PopUpDescription>
          </PopUpRight>
        </Box>
      </Modal>
    </Container>
  )
}

export default MyDataGrid