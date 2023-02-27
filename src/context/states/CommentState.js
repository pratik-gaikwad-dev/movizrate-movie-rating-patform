import React from 'react';
import CommentContext from '../contexts/CommentContext';

const CommentState = props => {
  return (
    <CommentContext.Provider value={{}}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
