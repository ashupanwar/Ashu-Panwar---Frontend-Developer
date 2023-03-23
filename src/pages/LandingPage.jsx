import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Search from '../components/Search'
import MyDataGrid from '../components/MyDataGrid'
import Footer from '../components/Footer'
import axios from 'axios'


const LandingPage = () => {

    const [listOfRockets, setListOfRockets] = useState([]);

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res=>{
            setListOfRockets(res.data);
        })
    },[]);


  return (
    <div>
        <Navbar/>
        <Banner/>
        <Search 
            setListOfRockets={setListOfRockets}
            listOfRockets={listOfRockets}
        />
        <MyDataGrid listOfRockets={listOfRockets}/>
        <Footer/>
    </div>
  )
}

export default LandingPage