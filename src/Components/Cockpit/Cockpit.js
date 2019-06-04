import React from 'react';
import Searchbar from '../SearchBar/SearchBar';
import Searchresults from '../SearchResults/SearchResults';
import classes from './Cockpit.css'

const cockpit = (props) => {

    return (
        <div className={classes.Cockpit}>
            <Searchbar
            changed={props.changed}
            placeholder={props.placeholder}
            alignicon={props.alignicon}
            disableicon={props.disableicon}/>
           
           <div className={classes.Searchresults}>
                <Searchresults 
                searchOnKey={props.searchOnKey}
                data={props.result}/> 
           </div>
        </div>
    )
}

export default cockpit;