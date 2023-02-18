import React, {useContext, useState} from 'react';
import MoviesContext from '../contexts/MoviesContext';
import OttContext from '../contexts/OttContext';

const OTTState = props => {
  const [netflix, setNetflix] = useState([]);
  const [primeVideo, setPrimeVideo] = useState([]);
  const [disney, setDisney] = useState([]);
  const [ottItems, setOttItems] = useState([]);
  const {movies} = useContext(MoviesContext);
  const setOttMovies = async () => {
    setOttItems([]);
    setOttItems([
      {
        movieID: '1',
        ott: 'disney',
      },
      {
        movieID: '2',
        ott: 'netflix',
      },
      {
        movieID: '3',
        ott: 'primevideo',
      },
      {
        movieID: '1',
        ott: 'netflix',
      },
      {
        movieID: '2',
        ott: 'primevideo',
      },
      {
        movieID: '3',
        ott: 'disney',
      },
    ]);
    setOttData();
  };

  const setOttData = () => {
    let netflixData = [];
    let primevideoData = [];
    let disneyData = [];

    for (let i = 0; i < ottItems.length; i++) {
      const element = ottItems[i];
      if (element.ott === 'netflix') {
        for (let j = 0; j < movies.length; j++) {
          const items = movies[j];
          if (items._id === element.movieID) {
            netflixData.push(items);
          }
        }
      }
    }

    for (let i = 0; i < ottItems.length; i++) {
      const element = ottItems[i];
      if (element.ott === 'primevideo') {
        for (let j = 0; j < movies.length; j++) {
          const items = movies[j];
          if (items._id === element.movieID) {
            primevideoData.push(items);
          }
        }
      }
    }

    for (let i = 0; i < ottItems.length; i++) {
      const element = ottItems[i];
      if (element.ott === 'disney') {
        for (let j = 0; j < movies.length; j++) {
          const items = movies[j];
          if (items._id === element.movieID) {
            disneyData.push(items);
          }
        }
      }
    }
    setNetflix(netflixData);
    setPrimeVideo(primevideoData);
    setDisney(disneyData);
  };
  return (
    <OttContext.Provider
      value={{setOttMovies, setOttData, primeVideo, netflix, disney}}>
      {props.children}
    </OttContext.Provider>
  );
};

export default OTTState;
