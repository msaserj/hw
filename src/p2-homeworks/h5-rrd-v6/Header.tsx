import React from 'react'
import {NavLink} from "react-router-dom"
import {PATH} from './Pages'
import css from './Header.module.css'


function Header() {
    let activeClassName = ({isActive}: {isActive: boolean}) => isActive ? css.active : css.link;
    return (
        <div className={css.header}>

            <NavLink to={PATH.PRE_JUNIOR} className={activeClassName} > pre-junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={activeClassName}> junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={activeClassName}> junior-plus </NavLink>
            <div className={css.block}/>

        </div>
    )
}

export default Header
