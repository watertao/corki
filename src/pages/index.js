import React, { Component } from 'react';
import { connect } from 'dva';
import { Redirect } from 'react-router-dom';


@connect(({global}) => ({global}))
export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <Redirect to='/p/home'/>
    );

  }

}
