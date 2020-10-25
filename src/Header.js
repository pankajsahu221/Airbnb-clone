import React from 'react'  
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            <div className="header">
                <Link to="/">
                    <img className="header-icon" alt="airbnb logo"
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png">
                    </img>
                </Link>
                <div className="header-center">
                    <input type="text" placeholder="Search here"/>
                    <div className="search-btn"><SearchIcon/></div>
                </div>

                <div className="header-right">
                    <p className="bcm-a-host">Become a host</p> 
                    <div className="globe"><LanguageIcon/></div>
                    <div className="down"><ExpandMoreIcon/></div>
                    <Avatar/>
                </div>
            </div>
        </header>
    )
}

export default Header
