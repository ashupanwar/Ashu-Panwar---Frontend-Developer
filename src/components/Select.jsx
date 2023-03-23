import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 60px;
    height: 30px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    margin-left: 10px;
`;

const SelectComp = styled.select`
    border: none;
    outline: none;
    border-radius: 30px;
    width: 80%;
    margin: 0 auto;
    flex: 1;
    margin-bottom: 16px;
`;

const LabelWrapper = styled.div`
    font-size: 8px;
    text-align: center;
    margin-left: 10px;
    background-color: #d40202;
    max-width: 26px;
    border-radius: 30px;
    display: flex;
    padding: 2px 4px;
    color: white;
    display: flex;
    justify-content: center;
`;

const Label = styled.label`
   
`;

const Select = (props) => {
  return (
    <Container>
        <LabelWrapper>
            <Label>{props.label}</Label>
        </LabelWrapper>
        

        <SelectComp name="cars" id="cars" onChange={(e)=>{props.setFilter(e.target.value)}}>
            {props.options.map(op=>(
                <option key={op} value={op}>{op}</option>
            ))}
        </SelectComp>
    </Container>
  )
}

export default Select