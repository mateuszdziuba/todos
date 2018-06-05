import React from 'react';

const Add = ({ onAdd }) => {
  return (
    <button className="btn btn-outline-success btn-lg" onClick={onAdd}>
      Add
    </button>
  );
};

export default Add;
