import React from "react";

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input type="text" 
                className="form-input"/>
                <input type="text"
                className="form-input" />
                <button className="form-btn">Get a meme image</button>
            </form>
        </main>
    )
}