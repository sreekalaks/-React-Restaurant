import React, {useEffect} from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Restlist() {

  //create a state

    const [AllRestaurants,setAllRestaurants] = useState([])

    //function to call Api to get data from restaturant.json

      const getRestaurants=async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
          data.json()
          .then((result)=>{
            // console.log(result);//array of data in console
            setAllRestaurants(result.restaurants)//(10)
          })

        })
      }

      console.log(AllRestaurants);

      useEffect( ()=>{
        getRestaurants()
      },[])
  return (

    <Row>
      {
        AllRestaurants.map((item)=>(
          <Restcard restaurant={item}/>
          // <h1>{item.name}</h1>
        ))
      }
    </Row>
  )
}

export default Restlist