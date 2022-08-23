import React from 'react';
import './Loader.scss';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="loader-container">
      <div className="loader-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
