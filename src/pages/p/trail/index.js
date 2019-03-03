import React, {Component} from 'react';
import {connect} from 'dva';



@connect(({app, loading}) => ({app, loading}))
export default class Login extends Component {


  constructor(props) {
    super(props);
  }


  render = () => {

    return (
      <div>todo...</div>
    );

  }


}
