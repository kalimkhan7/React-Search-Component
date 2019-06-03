import React from 'react';
import Searchresult from '../SearchResult/Searchresult'

const searchresults = (props) => {
return (props.data.map( dataToList => {

return <Searchresult dataList={dataToList[props.searchOnKey]} key={dataToList.key} />
}))};

export default searchresults;