import React from 'react';
import Searchresult from '../SearchResult/Searchresult';
import classes from './Searchresults.css'

const searchresults = (props) => {
return (props.data.map( dataToList => {

return (
    <div className={classes.Searchresults}>
        <Searchresult dataList={dataToList[props.searchOnKey]} key={dataToList.key} />
    </div>
)
}))};

export default searchresults;