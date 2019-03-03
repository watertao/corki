import React, {Component} from 'react';
import {connect} from 'dva';
import { TabBar } from 'antd-mobile';



@connect(({app, loading}) => ({app, loading}))
export default class Login extends Component {


  constructor(props) {
    super(props);
  }


  render = () => {

    return (
      <div>teacher home</div>
    );

  }


}
