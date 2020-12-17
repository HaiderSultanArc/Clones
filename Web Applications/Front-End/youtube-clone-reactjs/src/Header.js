import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube Logo" ></img>
                </Link>
            </div>
            
            <div className="header__input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                
                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://avatars3.githubusercontent.com/u/59045242?s=460&u=130818bb29c8c4a7c66d27b592a3fcb29d7d0578&v=4" alt="HS" />
            </div>
        </div>
    )
}

export default Header
