import React from "react";

import {BsSearch} from 'react-icons/bs'
import logo from '../../assets/logo.jpg'
import './styles.css'

function Header () {
    return (
        <div id="header-page">
            <img 
                className="logo-header"
                src={logo}
                alt="chfitness"
            />
            <form className="form-header">
                <input type="text" name="search" id="search"  placeholder="Encontre Suplementos"/>
                <button className="button-form-header">
                    <BsSearch size={22} />
                </button>
            </form>
        </div>
    )
}

export default Header