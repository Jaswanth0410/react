import React from "react"
import ReactDOM from 'react-dom/client';
import './App.css'
import Logo from './Vector.jpg'

export default function Navbar() {
    return (
//         <nav>
//             <img src="./logo512.png" width="40px"alt="logo" className="nav-icon" />
//             <h3 className="nav-logo-text">React Facts</h3>
//             <h4 className="nav-title">React course - Project 1</h4>
//         </nav>
//     )
// }
            <nav>
                <img src={Logo} alt="logo" className="nav-logo"/>
                
            </nav>
    )
}


const navbar = document.getElementById('root');
const root = ReactDOM.createRoot(navbar);
root.render(<Navbar />);