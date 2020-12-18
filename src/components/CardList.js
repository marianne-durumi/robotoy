import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>
  robots.map((user, i) => (
    <Card
      key={robots[i].username}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />
  ));

export default CardList;
