import React, { useContext, useState } from 'react';
import MoviesContext from '../contexts/MoviesContext';
import OttContext from '../contexts/OttContext';

const OTTState = props => {
  const [netflix, setNetflix] = useState([]);
  const [primeVideo, setPrimeVideo] = useState([]);
  const [disney, setDisney] = useState([]);
  const [ottItems, setOttItems] = useState([]);
  const { movies } = useContext(MoviesContext);
  const setOttMovies = async () => {
    setOttItems([]);
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:3000/api/v1/movies/getottmovies", requestOptions)
      .then(response => response.json())
      .then(result => {
        setDisney(result.hotstar);
        setNetflix(result.netflix);
        setPrimeVideo(result.primevideo)
      })
      .catch(error => console.log('error', error));
  };

  return (
    <OttContext.Provider
      value={{ setOttMovies, primeVideo, netflix, disney }}>
      {props.children}
    </OttContext.Provider>
  );
};

export default OTTState;
