import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {
  let { name, topic } = useParams();
  // name = name.replace('-', ' ');

  return (
    <div className="main-content">
      <h2>Featuring: {name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves
        teaching courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
