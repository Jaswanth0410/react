import React from "react";
import star from './Star 1.png'
import eventData from './data';

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
     }else if(props.location === "Online"){
        badgeText = "ONLINE"
     }
     
     const cardData = eventData.find(event => event.id === props.cardId);

    return (
        <div className="card">
            {
                badgeText &&
                <div className="card-badge">{badgeText}</div>
            }
            {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img 
                src={cardData.coverImg} alt="img1" 
                className="card-img"
            />
            <div className="card-stats">
                <img src={star} alt="stats" className="card-star"/>
                <span>{cardData.item.rating}</span>
                <span className="gray">({cardData.reviewcount}) . </span>
                <span className="gray">{cardData.location}</span>
            </div>
            <p className="card-title">{cardData.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}   