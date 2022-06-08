import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fecthCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import './style.css';
import ReactLoading from 'react-loading';

const HomePage = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fecthCharacters());
  }, [dispacth]);

  

  if(error){
    return <div>Error : {error}</div>
  }

  return (
    <>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => {
        return (
          <div key={character.char_id}>
            <img src={character.img} alt={character.name} className="characterImg"></img>
            <div>{character.name}</div>
          </div>
        );
        })}
        
      </Masonry>
      <div className="loadButton">
        {isLoading && <ReactLoading type="spin" color="green" height={150} width={150} className="spinner" /> }
        {nextPage >= 6 ? (<div>There is nothing to be shown</div>):(<button type="button" onClick={() => dispacth(fecthCharacters(nextPage))}>Load More.({nextPage})</button>)}
      
      </div>
      
      
      
    </>
  );
};

export default HomePage;
