import React from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


import paco from '../assets/paco.png'


class LandingPage extends React.Component {
  render = () =>
    <div className="landing-page">
        <img src={paco} style={{ width: '280px', height: '300px' }} alt="logo" />
        <Button 
        variant="contained" style={{marginTop: '20px'}}onClick={() => this.props.history.push("play")}>Play
        </Button>
    </div>
    
}

export default withRouter(LandingPage)
