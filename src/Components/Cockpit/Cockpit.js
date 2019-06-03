import React from 'react';
import Searchbar from '../SearchBar/SearchBar';
import Searchresults from '../SearchResults/SearchResults';
import classes from './Cockpit.css'

const cockpit = (props) => {

    return (
        <div className={classes.Cockpit}>
            <p className={classes.heading}>Type Here!</p>
            <Searchbar
            changed={props.changed}
            placeholder={props.placeholder}/>
            <Searchresults 
            searchOnKey={props.searchOnKey}
            data={props.result}/> 
        </div>
    )
}

export default cockpit;