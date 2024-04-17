import React from 'react';
import ReactDOM from'react-dom/client';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero'
import Card from './card'
import data from './data'

export default function App() {

  const cards = data.map(item => {
    return(
    <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
      )
  })
    
  
  return(
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

const app = document.getElementById("root")
const root = ReactDOM.createRoot(app)
root.render(<App />)