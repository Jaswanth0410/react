import React from "react";
import ReactDOM from 'react-dom/client';

export default function Main() {
    return (
        <main>
        <h1 className="main-title">Fun Facts about React</h1>
               <ul className="main-facts">
                    <li>Was first released in 2013</li>
                  <li>was originally created by Jorden Walke</li>
                  <li>Hass well over 100k stars on GitHub</li>
                     <li>Powers thousands of enterprise apps, including mobile apps</li>
               </ul>
        </main>
    )
}

const main = document.getElementById('root');
const root = ReactDOM.createRoot(main);
root.render(<Main />);