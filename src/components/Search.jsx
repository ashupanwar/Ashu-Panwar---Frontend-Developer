import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Select from '../components/Select';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    height: 140px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-item: end;
    z-index:11;
`;
const Wrapper = styled.div`
    width: 650px;
    height 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-item: center;
    z-index:11;
`;

const SearchBox = styled.div`
    width: 650px;
    height: 60px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    z-index:11;
`;

const SearchInputStyles = {
    width: "80%",
    marginTop: "12px",
    marginLeft: "20px",
}

const SearchButton = {
    borderRadius: "30px",
    width: "100px",
    height: "50px",
    marginTop: "5px",
    marginRight: "5px"
};

const Input = styled.input`
    width: 80%;
    margin-top: 0px;
    margin-left: 20px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    z-index:11;

    &:focus{
        outline: none;
    }
`;

const FilterContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent;
    border-radius: 30px;
    display: flex;
    justify-content: start;
    margin-top: 20px;
`;

const Search = (props) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [launchFilter, setLaunchFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    useEffect(()=>{

        axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res=>{
            let newList = res.data.filter((rocket)=>{
                let searchCondition = searchQuery!=='' ? rocket.rocket_name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    
                let launchCondition = launchFilter=='all'? true : rocket.first_flight.includes(launchFilter.toString())
                let activeCondition = statusFilter=='all'? true : statusFilter=='active' ? rocket.active : !rocket.active
                let typeCondition = typeFilter=='all'? true : rocket.rocket_type===typeFilter
    
                console.log(rocket.rocket_type,typeFilter);
    
                return searchCondition && launchCondition && activeCondition && typeCondition
            })
    
            props.setListOfRockets(newList);
        })

        

    },[searchQuery,statusFilter,launchFilter,typeFilter])

  return (
    <Container>
        <Wrapper>
            <SearchBox>
                <Input placeholder='Search Rockets...' onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                <Button variant="contained" style={SearchButton} color="error">Search</Button>
            </SearchBox>

            <FilterContainer>
                <Select label="Status" options={["all","active","not active"]} setFilter={setStatusFilter}/>
                <Select label="Launch" options={["all",2006,2010,2018,2021]} setFilter={setLaunchFilter}/>
                <Select label="Type" options={["all","rocket","capsule"]} setFilter={setTypeFilter}/>
            </FilterContainer>
            
        </Wrapper>
    </Container>
  )
}

export default Search