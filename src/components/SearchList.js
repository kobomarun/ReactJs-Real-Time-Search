import React from 'react';

const SearchList = (props) => {

  return(
    <div>
      <section className="main-container">  
       { props.search.length > 0 &&
        props.libraries.map((list) => {
        return (
          <table className="app-list" key={list.url}>
          <tbody>
          <tr>
            <td>{list.name}</td>
            <td><a href={list.url} target="_blank">{list.url}</a></td>
          </tr>
          </tbody>
          </table>
        );
        })}
      
      </section>
    </div>
  )

}

export default SearchList;