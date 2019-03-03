import React, {Component} from 'react';
import {connect} from 'dva';
import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import styles from './_layout.less';
import _ from 'lodash';
import router from 'umi/router';



@connect(({app, loading}) => ({app, loading}))
export default class _layout extends Component {


  constructor(props) {
    super(props);
  }


  render = () => {

    const { children } = this.props;

    return (
      <div className={styles.container}>
        <div style={{ height: 'calc(100% - 50px)', overflow: 'auto' }}>{children}</div>

        <TabBar
          unselectedTintColor="#949494"
          noRenderContent={true}
          tintColor="#33A3F4"
          prerenderingSiblingsNumber={0}
        >
          <TabBar.Item
            title="trail"
            key="trail"
            icon={<Icon type="stock" />}
            selectedIcon={<Icon type="stock" />}
            onPress={this._onTabPress.bind(this, 'trail')}
            selected={this._isTabSelected('trail')}
          >

          </TabBar.Item>

          <TabBar.Item
            title="home"
            key="home"
            icon={<Icon type="home" />}
            selectedIcon={<Icon type="home" />}
            dot={true}
            onPress={this._onTabPress.bind(this, 'home')}
            selected={this._isTabSelected('home')}
          >
          </TabBar.Item>

          <TabBar.Item
            title="user"
            key="user"
            icon={<Icon type="user" />}
            selectedIcon={<Icon type="user" />}
            onPress={this._onTabPress.bind(this, 'user')}
            selected={this._isTabSelected('user')}
          >
          </TabBar.Item>

        </TabBar>
      </div>
    );

  }

  _onTabPress = (key) => {
    if (!this._isTabSelected(key)) {
      router.push(`/p/${key}`);
    }
  }

  _isTabSelected = (key) => {
    const { location: { pathname } } = this.props;
    return _.startsWith(pathname, `/p/${key}`);
  }

}
