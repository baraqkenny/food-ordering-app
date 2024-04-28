import React from 'react'
import './FoodCard.css'

function FoodCard({ food, key }) {
  return (
    <section className='foodcard__container'>
        <button
        onClick={
            console.log('hello world')
        }
        >high rating</button>
      <section className="foodcard__content">
        <img className="foodcard__image" src={food.imageGridCards.info[0].imageId} />
        <section>
            <h3 className="foodcard__title">hello</h3>
            <p className="foodcard_text">hello</p>
        </section>
      </section>
    </section>
  )
}

export default FoodCard
