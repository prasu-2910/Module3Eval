import React from 'react'
import { useState } from 'react'

const RestaurantData = () => {
    const[data,setData]=useState([{
  "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
}
])

  return (
    <div><h2>Restaurant data management</h2></div>
  )
}

export default RestaurantData