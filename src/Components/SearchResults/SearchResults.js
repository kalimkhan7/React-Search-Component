import React from 'react';
import Searchresult from '../SearchResult/Searchresult'

const searchresults = (props) => props.data.map( state => {
    return <Searchresult stateName={state.name} key={state.key}/>
});

export default searchresults;