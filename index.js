// ReactDOM.render(<h1>Hello EveryOne!</h1>,document.getElementById("root"))
// ReactDOM.render(<p>Hi,My name is Jaswanth</p>,document.getElementById("root"))
// ReactDOM.render(<ul>
//     <li>One</li>
//     <li>Two</li>
// </ul>,document.getElementById("root"))

function MainContent(){
    return (
        <h1>Im learning React<h1>
    )
}
    


ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>
    document.getElementById("root")
)