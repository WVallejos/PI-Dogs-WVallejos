import { NavLink } from "react-router-dom"
import styles from '../styles/Nav.module.css'
import SearchBar from "./SearchBar"
import Filters from './Filters'

function Nav() {

    return (
        <nav className={styles.nav}>
            <img className={styles.headerImg} />
            <div className={styles.navbar}>
                <SearchBar />
                <Filters />
                <NavLink to='/detail'>
                    <span>CREATE A DOG</span>
                </NavLink>
                <NavLink to='/home'>
                    <span>HOME</span>
                </NavLink>
                
            </div>
        </nav>
    )
}

export default Nav