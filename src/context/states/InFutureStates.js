import React from 'react';
import InFutureContext from '../contexts/InFutureContext';
import config from '../../config.json';

const InFutureStates = props => {
  const [futureMovies, setFutureMovies] = React.useState([]);

  const setFutureItems = () => {
    setFutureMovies([]);

    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getupcommingmovies`, requestOptions)
        .then(response => response.json())
        .then(result => setFutureMovies(result.upcomming))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <InFutureContext.Provider value={{ setFutureItems, futureMovies }}>
      {props.children}
    </InFutureContext.Provider>
  );
};

export default InFutureStates;
