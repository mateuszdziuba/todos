import React from 'react';

const Remove = ({ onRemove, countTodos }) => {
  
  return (
    <button className="btn btn-danger btn-lg active" disabled={!countTodos} onClick={onRemove}>
      Remove
    </button>
  );
};

export default Remove;
