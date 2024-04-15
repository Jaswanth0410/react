import React from "react"
import ReactDOM from "react-dom/client"
import grid from './Group 77.png'

export default function hero(){
    return (
        <section>
            <img src={grid} alt="grid"  className="hero-img"/>
            <h1 className="hero-text">Online Experiences</h1>
            <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

const Hero = document.getElementById("root")
const root = ReactDOM.createRoot(Hero)
root.render(<hero />)