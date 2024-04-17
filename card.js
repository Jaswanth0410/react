import React from "react";
import img1 from './image 12.jpg'
import star from './Star 1.png'

export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <img src={img1`${props.img}`} alt="img1" className="card-img"/>
            <div className="card-stats">
                <img src={star} alt="stats" className="card-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewcount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>


    )
}   