import { useState, useEffect } from 'react';
import './Body.css'
import FoodCard from './FoodCard';
import Shimmer from './Shimmer';

function Body() {
 const [foodDetails, setFoodDetails] = useState([]);
 const [error, setError] = useState(null)
 

useEffect(()=> {
  fetchData()
},[])

const fetchData = async ()=> {
  try{
  const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
  if(!response.ok){
    throw new Error("Failed to fetch data from swiggy API");
  } 
  const data = await response.json();
  console.log(data)
  setFoodDetails(data?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
} catch(error){
    console.log(error)
    setError(error)
  }
}



  return  (
    <section className='body__container'>
      <section className='body__content'>
      <section className='body__content__one'>
        <h1>Dive into Delights Of Delectable <span>Food</span></h1>
        <p>Where Each Plate Weave a story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className='order__now' type="button">Order Now</button>
      </section>
      <section className="'body__content_one">
       <img src=".\lady-food" alt="" />
      </section>
      </section>
      <button className='top__rated' onClick={()=> {
        const filtered = foodDetails.filter((res) => res.data.avgRating > 4)
        setFoodDetails(filtered)
      }}>Top rated</button>
      { error ? ( <Shimmer /> ) :
        foodDetails.map((food)=> (
          <FoodCard key={food.data.id} food={food} />
      ))}
      
    </section>
  )
}

export default Body
