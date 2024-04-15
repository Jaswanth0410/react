import React from 'react';
import ReactDOM from'react-dom/client';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero'
import Card from './card'

export default function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

const app = document.getElementById("root")
const root = ReactDOM.createRoot(app)
root.render(<App />)