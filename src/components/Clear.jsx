import React from 'react';

const Clear = ({ onClear, countTodos }) => {
  return (
    <button className="btn btn-primary btn-lg" disabled={!countTodos} onClick={onClear}>
      Clear
    </button>
  );
};

export default Clear;
