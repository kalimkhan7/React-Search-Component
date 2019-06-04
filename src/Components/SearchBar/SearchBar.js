import React from 'react';
import classes from './Searchbar.css'

var SearchIcon = require('react-fontawesome');
const searchbar = (props) => {

    const assignedClasses = [classes.SearchIcon];


    let inputClass = '';

    if (props.alignicon === "left") {
        assignedClasses.push(classes.leftAlign);
        inputClass = classes.leftAlign;
        console.log(classes.leftAlign);
    }
    if (props.alignicon === "right") {
        assignedClasses.push(classes.rightAlign);

    }

    let Searchicon = null;

    if (props.disableicon === "false") {
        Searchicon = (<SearchIcon
            alignicon={props.alignicon}
            disableicon={props.disableicon}
            className={assignedClasses.join(' ')}
            name='search' />)
    }



    return (

        <div className={classes.Searchbar}>
            <input className={inputClass} type="text" onChange={props.changed} placeholder={props.placeholder} name="search" />
            <div>
                {Searchicon}
            </div>
        </div>

    );
};

export default searchbar;
