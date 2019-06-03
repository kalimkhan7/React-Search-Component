import React from 'react';
import classes from './Searchresult.css'

const searchresult = (props) => {
    return <p className={classes.result}>{props.dataList}</p>
}

export default searchresult;