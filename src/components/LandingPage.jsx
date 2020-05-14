import React from 'react';

import paco from '../assets/paco.png'


class LandingPage extends React.Component {
  render = () =>
    <div className="landing-page">
      <img src={paco} style={{ width: '280px', height: '300px' }} alt="logo" />
    </div>
}

export default LandingPage
