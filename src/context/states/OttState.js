import React, { useState } from 'react';
import OttContext from '../contexts/OttContext';
import config from '../../config.json';

const OTTState = props => {
  const [netflix, setNetflix] = useState([]);
  const [primeVideo, setPrimeVideo] = useState([]);
  const [disney, setDisney] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const setOttMovies = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getottmovies`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setDisney(result.hotstar);
          setNetflix(result.netflix);
          setPrimeVideo(result.primevideo)
          setIsLoading(false)
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(true)
  };

  return (
    <OttContext.Provider
      value={{ setOttMovies, primeVideo, netflix, disney, isLoading }}>
      {props.children}
    </OttContext.Provider>
  );
};

export default OTTState;
