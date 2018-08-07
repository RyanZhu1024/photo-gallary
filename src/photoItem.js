import React from 'react';

export default ({ className, photo }) => {
  return <img className={className} src={photo.source} />;
};
