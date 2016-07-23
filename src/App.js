import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
    this.libraries = props.libraries;
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
     this.setState({
      search: e.target.value
    });
  }

  render() {
    let libraries = this.props.items;
    let search = this.state.search.trim().toLowerCase();

    if(search.length > 0){

      libraries = libraries.filter((l) => {
        let allSearch = l.name.toLowerCase().match( search );
        return allSearch;
      });
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="olu-search-container">
          <h1> Search for All Javascript Librariess and Framework</h1>
          <div>
          <input 
            type="text" 
            placeholder="Enter your search term"
            value={this.state.search}
            onChange={this.handleSearch}
            />
            </div>
        <small> e.g react, jquery etc..</small>
        <div className="show-search">{this.state.search}</div>
        <section className="main-container">
      
         { search.length > 0 &&
          libraries.map((list) => {
          return (
            <table className="app-list" key={list.url}>
            <tbody>
            <tr>
              <td>{list.name}</td>
              <td>{list.url}</td>
            </tr>
            </tbody>
            </table>
          );
          })}
        
        </section>
        </div>
      </div>
    );
  }
}

export default App;
