import { NavLink, useLocation } from "react-router-dom"
import styles from '../styles/Nav.module.css'
import SearchBar from "./SearchBar"
import Filters from './Filters'
import '../styles/Filters.css'

function Nav() {
    const location = useLocation()
    const isHome = location.pathname === '/home'
    const isForm = location.pathname === '/addDog'
    return (
        <nav className={styles.nav}>
            <h1 className={styles.welcome}>WELCOME !</h1>
            <div className={styles.navbar}>
                {isHome && <SearchBar />}
                {isHome && <Filters />}
                <NavLink to='/addDog'>
                <span className={isForm ? 'selected' : 'button' }>CREATE DOG</span>
                </NavLink>
                <NavLink to='/home'>
                    <span className={isHome ? 'selected' : 'button' }>HOME</span>
                </NavLink>
                
            </div>
        </nav>
    )
}

export default Nav