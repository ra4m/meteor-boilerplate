import React from 'react';

import PrivateHeader from './PrivateHeader.js';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">Dashboard</div>
    </div>
  );
};
