import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import SearchList from './components/SearchList.js';
import Header from './components/Header.js';

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
      <div className="olu-search">
       <Header />
        <div className="olu-search-container">
          <h1> Search for All Javascript Librariess and Framework</h1>

          <Search onHandleSearch={this.handleSearch} handleType={this.state.search} />

          <SearchList libraries={libraries} search={search}/>
          </div>
          <div className="panel panel-default">
          <div className="panel-heading">2016. Copyright</div>
        </div>
      </div>
    );
  }
}

export default App;
