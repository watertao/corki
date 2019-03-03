import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import PageLoading from '@/components/PageLoading';
import { Redirect } from 'react-router-dom';


@connect(({ global }) => ({ global }))
export default class AuthorizedLayout extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/fetchCurrent',
    });
  }

  render() {
    const { children, global: { currentUser }, role } = this.props;

    return (
      <React.Fragment>
        {(() => {
          if (currentUser) {
            if (currentUser.role == role) {
              return children;
            } else {
              if (currentUser.role == 'ROLE_TEACHER') {
                return <Redirect to="/t/home"/>;
              } else {
                return <Redirect to="/p/home"/>;
              }
            }
          } else {
            <PageLoading />
          }
        })()}
      </React.Fragment>
    );
  }
}
