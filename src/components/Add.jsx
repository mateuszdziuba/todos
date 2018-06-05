import React from 'react';

const Add = ({ onAdd }) => {
  return (
    <button className="btn btn-success btn-lg active" onClick={onAdd}>
      Add
    </button>
  );
};

export default Add;
