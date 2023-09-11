import React from 'react'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Rooms/Rooms'
import HomePage from './Home/HomePage'
import Gallery from './Home/Gallery'

const Home = () => {
  return (
    <>
      <HomePage></HomePage>
      <Categories />
      <Rooms />
      <Gallery></Gallery>
    </>
  )
}

export default Home
