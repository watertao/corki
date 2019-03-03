import React, {Component} from 'react';
import {connect} from 'dva';
import { WingBlank, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { Form, Icon } from 'antd';
import styles from './index.less';
import PlaceHolder from '@/components/PlaceHolder';


@connect(({global, loading}) => ({global, loading}))
@Form.create()
export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  isFormFullFilled = () => {
    const {form} = this.props;
    const fieldsValues = form.getFieldsValue();

    if (_.isEmpty(fieldsValues.login_name) || _.isEmpty(fieldsValues.password)) {
      return false;
    } else {
      return true;
    }
  }

  onLoginBtnClick = () => {
    const { dispatch, form } = this.props;
    dispatch({
      type: 'global/login',
      payload: form.getFieldsValue()
    });
  }

  render = () => {
    const {loading, form, global} = this.props;
    const {getFieldDecorator} = form;

    return (
      <div className={styles.login}>

        <div style={{ padding: '16px 16px 16px 16px', height: 'calc(100% - 236px)' }}>
          <PlaceHolder containerStyle={{ height: '100%'}} />
        </div>

        <WingBlank className={styles.bottomFloat}>

          {getFieldDecorator('login_name', {})(
            <InputItem
              placeholder={'mobile'}
            >
            </InputItem>
          )}

          <WhiteSpace size="xl" />
          {getFieldDecorator('password', {})(
            <InputItem
              type="password"
              placeholder={'password'}
            >
            </InputItem>
          )}
          <WhiteSpace size="xl" />
          <Button type="primary" loading={loading.effects['global/login']} disabled={!this.isFormFullFilled()} onClick={this.onLoginBtnClick}>LOGIN</Button>
          <WhiteSpace size="md" />
          <div style={{ fontSize: 13, textAlign: 'center' }}>
            <span>new user? </span>
            <a>sign up</a>
          </div>

        </WingBlank>
      </div>
    );

  }


}
