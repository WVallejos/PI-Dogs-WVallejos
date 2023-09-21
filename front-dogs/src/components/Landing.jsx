import { NavLink } from "react-router-dom"
import '../styles/Landing.css'

function Landing() {

    return (
        <div className="landingContainer">
            <h1>WELCOME ! </h1>
            <div >
                <NavLink to='/home'>
                    <span className="home">HOME</span>
                </NavLink>
                
            </div>
            <h3>webpage created by Guille Vallejos</h3>
        </div>
    )
}

export default Landing