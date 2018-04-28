import React, { Component } from 'react';

import Spinner from './components/Spinner/Spinner';

import { getCharacters } from './components/Helpers/api';

import CharacterList from './components/CharacterList/CharacterList';

import {
  Search,
  // SelectedList
}
from './components'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this);
    this.state = {
      searchValue: '',
      isLoading: false,
      characters: [],
      error: false,
    }
  }

  /* auto biding */
  onChange = (e) => {
    const searchValue = e.target.value
    this.setState({ searchValue })
  }

 
  // get list(){
  //   return [
  //     {id: 0, text: 'react'},
  //     {id: 1, text: 'css'},
  //     {id: 2, text: 'html'},
  //     {id: 3, text: 'fetch'},
  //   ]
  // }

  handleClick = (event) => {
    this.setState({
      isLoading: true,
    })
    getCharacters(this.state.searchValue)
    .then((result) => {
      console.log(result.data.data.results);
      this.setState({
        isLoading: false,
        characters: result.data.data.results,
      })
    })
    .catch((error) => {
      console.log(error)
      this.setState({
        error: true,
        isLoading: false
      })
    })
  }

  render() {
    const { searchValue } = this.state

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <Search searchValue={searchValue} onChange={this.onChange} />
              <button className="search-button" onClick={this.handleClick}>search</button>
              {this.state.isLoading ? <Spinner message="Loading..."/> 
              : <CharacterList characters={this.state.characters}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
