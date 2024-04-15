import React from "react";
import img1 from './image 12.jpg'
import star from './Group 65.png'

export default function Card(){
    return (
        <div className="card">
            <img src={img1} alt="img1" className="card-img"/>
            <div className="card-stats">
                <img src={star} alt="stats" />
            </div>
        </div>
    )
}