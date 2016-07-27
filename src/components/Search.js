import React from 'react';

const Search = (props) => {

  return(
    <div>
      <input 
        type="text" 
        placeholder="Enter your search term"
        value={props.handleType}
        onChange={props.onHandleSearch}
        autoFocus
      />
    <p><small> e.g react, jquery etc..</small></p>
     <div className="olu-show-search">{props.handleType}</div>
    </div>
  )

}

export default Search;