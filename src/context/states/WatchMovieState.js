import React from 'react';
import WatchMovieContext from '../contexts/WatchMovieContext';

const WatchMovieState = props => {
  const [watchMovie, setWatchMovie] = React.useState({});

  return (
    <WatchMovieContext.Provider value={{ watchMovie, setWatchMovie }}>
      {props.children}
    </WatchMovieContext.Provider>
  );
};

export default WatchMovieState;
