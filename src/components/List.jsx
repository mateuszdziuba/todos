import React from 'react';

const List = ({ countTodos }) => {
  const listTodos = [];

  for (let i = 1; i <= countTodos; i++) {
    listTodos[i] = <li key={i} className="list-group-item list-group-item-light">Task number {i}</li>;
  }

  return <ul className="list-group">{listTodos}</ul>;
};

export default List;
