import React from 'react';
import './app.css'

// export default function App(){
//     function handleClick(){
//         console.log("I was clicked")
//     }

//     function handleMouseOver(){
//         console.log("MOuseOver")
//     }

//     return (
//         <div className='container'>
//             <img src='https://picsum.photos/640/360' 
//             alt='img' onMouseOver={handleMouseOver}/>
//             <button onClick={handleClick}>Click ME</button>
//         </div>
//     )
// }
   // EvntListeners
// export default function App(){

//     const [things,setThings] = React.useState(["Thing1","Thing2"])

//     // const thingsArray = ["Thing1","Thing2"]
//     // const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//
//   function addItem(){
//         const newItem = `Thing ${things.lengthg +1}}`
//         // thingsArray.push(newItem)
//         // console.log(thingsArray)
//         setThings(prevState => [...prevState,newItem])

// //     }
//     const thingsElement = things.map(thing => <p key={thing}>{thing}</p>)

//     return(
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElement}
//         </div>
//     )
// }
//Ternary Operator
// function greeting(name) {
//     const date = new Date()
//     const hours = date.getHours()
    
//     let timeofDay
//     if(hours >=4 && hours <12){
//         timeofDay = "Good Morning"
//     }else if(hours >=12 && hours <16){
//         timeofDay = "Good Afternoon"
//     }else if(hours >=16 && hours <18){
//         timeofDay = "Good Evening"
//     }else{
//         timeofDay = "Good Night"
//     }

//     return ` ${timeofDay},${name}!`
// }
// console.log(greeting("Bob"))

// export default function App() {
//     const [isImportant,func] = React.useState("Yes")
//     console.log(isImportant)
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value">
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }

// Counter
// export default function App(){
//     const [count, setCount] = React.useState(0)

//     function add(){
//         setCount(count +1)
//     }

//     function subtract(){
//         setCount(count -1)
//     }

//     return(
//         <div className='counter'>
//             <button className='counter-minus' onClick={subtract}>-</button>
//             <div className='counter-count'>
//                 <h1>{count}</h1>
//             </div>
//             <button className='counter-plus' onClick={add}>+</button>
//         </div>
//     )
// }