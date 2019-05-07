import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';
import DustList from './containers/dust_list';
import Navbar from './containers/Navbar';



class App extends Component {
  render() {
    return (
      <div className="App container mt-3">
        <Navbar />
        <SearchBar />
        <DustList />
      </div>
    );
  }
}

export default App;