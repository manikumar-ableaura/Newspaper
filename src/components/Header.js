import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <>
            <div className='Main-layout'>

                <div className="split-text">
                    <span className="left">EN | IN</span>
                    <span className="divider"></span>
                    <span className="right"><p> <SearchIcon /> What are you Looking for ?</p></span>
                </div>

                <h1>NEWS FACTORY</h1>

                <div className='right-bit'>
                    <p>LOGIN</p>
                    <h3>Subscribe and Get 50% off</h3>
                </div>

            </div>
        </>
    );
}

export default Header;
