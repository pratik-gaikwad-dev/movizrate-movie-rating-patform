import React, {useState} from 'react';
import MoviesContext from '../contexts/MoviesContext';

const CarouselState = props => {
  const [movies, setMovies] = useState([]);
  const setMoviesItems = () => {
    setMovies([
      {
        _id: '1',
        image:
          'https://wallpapers.com/images/featured/tzhfez1w8ud2z8aw.jpg',
        posterImage: "https://www.gamespot.com/a/uploads/original/1557/15576725/3348720-deadpool-1080750.jpeg",
        name: 'Deadpool',
        rating: 4.2,
      },
      {
        _id: '2',
        image:
          'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/45285862-7bdf-44e8-bb22-1ea074003ca6/new-poster-art-for-ant-man-and-the-wasp-quantumania.jpg',
        name: 'Ant-Man and the Wasp: Quantumania',
        posterImage: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b9/Ant-Man_and_the_Wasp_Quantumania_Poster_Tall.jpg/revision/latest?cb=20230110033912",
        rating: 4.3,
      },
      {
        _id: '3',
        image:
          'https://m.media-amazon.com/images/I/71LPURVJypL._SL1500_.jpg',
        name: 'Thor: Love and Thunder',
        posterImage: "https://m.media-amazon.com/images/I/91n6C5xJssL._SY679_.jpg",
        rating: 4.4,
      },
    ]);
  };
  return (
    <MoviesContext.Provider value={{setMoviesItems, movies}}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default CarouselState;
