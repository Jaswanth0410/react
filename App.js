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
      key={item.id}
      {...item}
      
  />)
  })
    
  
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}

const app = document.getElementById("root")
const root = ReactDOM.createRoot(app)
root.render(<App />)