import React from 'react';
import Navbar from './Navbar';


class LandingPage extends React.Component {
  render = () =>
    <div className="App" style={{ height: "100vw", display: 'flex', flexDirection: 'column', backgroundColor: '#91A6FF' }}>
        <Navbar />
    
    </div>
}

export default LandingPage
