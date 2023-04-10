import React, { useState } from 'react';
import InFutureContext from '../contexts/InFutureContext';
import config from '../../config.json';

const InFutureStates = props => {
  const [futureMovies, setFutureMovies] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [internetWorking, setinternetWorking] = useState(true)

  const setFutureItems = () => {
    setFutureMovies([]);

    try {
      setIsLoading(true);
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getupcommingmovies`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setFutureMovies(result.upcomming);
          setIsLoading(false);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <InFutureContext.Provider value={{ setFutureItems, futureMovies, isLoading, internetWorking, setinternetWorking }}>
      {props.children}
    </InFutureContext.Provider>
  );
};

export default InFutureStates;
