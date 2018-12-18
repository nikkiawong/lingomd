import React from 'react'
import { Redirect } from 'react-router-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {isValid} = this.props;
    if (isValid) {
      return <Redirect to='/results' />;
    } else {
      return null;
    }
  }
}

export default Test;
