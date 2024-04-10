// ReactDOM.render(<h1>Hello EveryOne!</h1>,document.getElementById("root"))
// ReactDOM.render(<p>Hi,My name is Jaswanth</p>,document.getElementById("root"))
// ReactDOM.render(<ul>
//     <li>One</li>
//     <li>Two</li>
// </ul>,document.getElementById("root"))


// const h1 = document.createElement("h1");
// h1.textContent = "This is the Impertaive way to program";
// h1.className = "header";
// document.getElementById("root").append(h1)

// const h1 = document.createElement("h1")
// h1.textContent = "Hello World"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// //JSX
// ReactDOM.render(
//     <h1 className="header">This is JSX</h1>,
//     document.getElementById("root")
// )

//First Project
const navbar = (
    <nav>
        <h1>Jaswanth</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root")) 
