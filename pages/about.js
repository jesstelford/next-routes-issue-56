import React from 'react';

import { Router } from '../routes';

export default class About extends React.Component {

  componentDidMount() {
    Router.replace('/abc123');
  }

  render() {
    return <div>Redirecting to /abc123</div>;
  }

};
