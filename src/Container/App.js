import React from 'react';
import './App.css';
import classes from './App.css';
import Searchbar from '../Components/SearchBar/SearchBar';
import Data from '../Data/Data';
import Searchresults from '../Components/SearchResults/SearchResults';

class App extends React.Component {

  state = {
    data: Data,
    result: []
    
  }

  onChangeHandler = (event) => {
    
      var searchResult = [];
      const input = event.target.value.toUpperCase();
      const states = [...this.state.data];
     

      for(var i = 0; i < states.length; i++){
                  
          if(states[i].name.toUpperCase().indexOf(input) !== -1) searchResult.push(states[i]);
      }

      if(!event.target.value){
        searchResult= []
      };
      

      this.setState({
        result: searchResult
      });

      
  
  }

  render() {
    // console.log(this.state);

    // result = this.state.data

    return (
      <div className="App">
        <h1>Type Here!</h1>
        <Searchbar
          changed={this.onChangeHandler}
        />
        <Searchresults 
        data={this.state.result}/>
      </div>
      
    );

  }
  
}

export default App;
