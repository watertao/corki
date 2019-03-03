import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { formatMessage } from 'umi/locale';
import PageLoading from '@/components/PageLoading';
import AuthorizedLayout from './AuthorizedLayout';


/**
 * The global main Layout component.
 * It's responsible for:
 * 1. check whether new version comes, and redirect to new feature page
 * 2. check whether current path need authorised, if does and no session exist,redirec to login page
 */
@connect(({ global }) => ({ global }))
export default class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // 初始化 app，获取各种初始华参数，以及会话信息， 设置 inited = true,

    const { dispatch } = this.props;
    dispatch({
      type: 'global/initApp'
    });

  }

  render() {
    const { children, location: { pathname }, global: { isInitialized } } = this.props;

    return (
      <React.Fragment>
        {(() => {
          if (isInitialized) {
            const role = this._checkPagePermission(pathname);
            if (role) {
              return <AuthorizedLayout role={role}>{children}</AuthorizedLayout>;
            } else {
              return children;
            }
          } else {
            return <PageLoading/>;
          }
        })()}
      </React.Fragment>
    );
  }

  /**
   * check whether page should be accessed after authorization
   *
   * @param pathname
   * @returns {string}
   * @private
   */
  _checkPagePermission(pathname) {
    if (_.startsWith(pathname, '/t')) {
      return 'ROLE_TEACHER';
    } else if (_.startsWith(pathname, '/p')) {
      return 'ROLE_PARENT';
    } else {
      return null;
    }

  }


}
