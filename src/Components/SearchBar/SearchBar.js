import React from 'react';
import classes from './Searchbar.css'

var SearchIcon = require('react-fontawesome');
const searchbar = (props) => {
    return (
        <div className={classes.Searchbar}>
                <input type="text" onChange={props.changed} placeholder={props.placeholder} name="search"/>
                <SearchIcon
                    className={classes.SearchIcon}
                    name='search'
                    size='2x'
                    // spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>   
        </div>
    );   
};

export default searchbar;
