import React, { useState } from 'react';
import CastAndDirectorContext from '../contexts/CastAndDirectorContext';
import config from '../../config.json';

const CastAndDirectorState = props => {
  const [finalCast, setFinalCast] = useState([]);
  const [finalDirectors, setFinalDirectors] = useState([]);

  const getMovieCast = (movieid) => {
    try {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      fetch(`${config.server.host}/api/v1/movies/getmoviecast/${movieid}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            setFinalCast([]);
            setFinalDirectors([]);
            return;
          }
          const actor = result.actors.filter((ele) => {
            if (ele.type === "Actor") {
              return ele;
            }
          });
          const directors = result.actors.filter((ele) => {
            if (ele.type === "Writer") {
              return ele;
            }
          });
          setFinalCast(actor);
          setFinalDirectors(directors);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CastAndDirectorContext.Provider
      value={{ getMovieCast, finalCast, finalDirectors }}>
      {props.children}
    </CastAndDirectorContext.Provider>
  );
};

export default CastAndDirectorState;
