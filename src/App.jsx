import React from 'react'
import './App.css'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'

function App() {

  return (
    <section className='app__container'>
      <Header />
      <Body/>
      <RestaurantCard />
    </section>
  )
}

export default App
