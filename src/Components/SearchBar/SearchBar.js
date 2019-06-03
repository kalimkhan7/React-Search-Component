import React from 'react';

const searchbar = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed}></input>
        </div>
    );   
};

export default searchbar;