import React, {useState} from 'react';
import MoviesContext from '../contexts/MoviesContext';

const CarouselState = props => {
  const [movies, setMovies] = useState([]);
  const setMoviesItems = () => {
    setMovies([]);
    setMovies([
      {
        _id: '1',
        image:
          'https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/103031/deadpool-2.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format',
        posterImage:
          'https://www.gamespot.com/a/uploads/original/1557/15576725/3348720-deadpool-1080750.jpeg',
        name: 'Deadpool',
        rating: 4.2,
        genre: 'Action Comedy',
        desc: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
        type: 'Movie',
        videoID: 'ONHBaC-pfsk',
      },
      {
        _id: '2',
        image:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/ant-man-and-the-wasp-reald-3d-poster.jpg',
        name: 'Ant-Man and the Wasp: Quantumania',
        posterImage:
          'https://www.comingsoon.net/wp-content/uploads/sites/3/2022/07/ant-man-and-the-wasp-quantumania-poster.jpeg',
        rating: 4.3,
        genre: 'Action Comedy',
        desc: 'Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.',
        type: 'Movie',
        videoID: 'nYzlbXWHGJU',
      },
      {
        _id: '3',
        image: 'https://m.media-amazon.com/images/I/71LPURVJypL._SL1500_.jpg',
        name: 'Thor: Love and Thunder',
        posterImage:
          'https://m.media-amazon.com/images/I/91n6C5xJssL._SY679_.jpg',
        rating: 4.4,
        genre: 'Action Comedy',
        desc: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
        type: 'Movie',
        videoID: 'sFTD5vBfRGY',
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
