import { NavLink } from "react-router-dom"

function Landing() {

    return (
        <div >
            <h1>WELCOME ! </h1>
            <div>
                <NavLink to='/home'>
                    <span>HOME</span>
                </NavLink>
                
            </div>
        </div>
    )
}

export default Landing