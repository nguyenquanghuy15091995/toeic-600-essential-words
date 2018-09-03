import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="block-footer">
        <Divider className="block-footer-devider" />
        <div className="block-footer-content">
          <Typography variant="caption" gutterBottom>
            Designed by <a className="block-footer-content-link">Alpha group</a>
             - <a className="block-footer-content-link">About</a>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Footer;
