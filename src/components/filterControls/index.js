import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  const listFiltering = <span><span>List Filtering:</span><input type="text" placeholder="Title Search" onChange={handleTextChange}/></span>;

  if (props.numMovies > 0){
  return (
    <div className="row filterBar">
      <div className="col-md-12">
        <h4>
          {listFiltering}
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </h4>
      </div>
    </div>
  );
  } else {
    return(
      <div className="row filterBar">
        <div className="col-md-12">
          <h4>
            {listFiltering}
          </h4>
        </div>
      </div>
    )
  }

};

export default FilterControls;