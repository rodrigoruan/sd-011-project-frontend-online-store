import React from 'react';
import * as api from '../services/api';

class Category extends React.Component {
  render() {
    const result = api.getCategories().then()
    return (
      <div>
        <ul>
          {console.log(result)}
          {/* {api.getCategories.map(({ name }) =>(<li>`${name}`</li>))} */}
          {/* {console.log(api.getCategories().then())} */}
        </ul>
      </div>
    );
  }
}
// {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
export default Category;