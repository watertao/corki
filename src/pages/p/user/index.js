import React, {Component} from 'react';
import {connect} from 'dva';
import PlaceHolder from '@/components/PlaceHolder';
import styles from './index.less';
import {WingBlank, WhiteSpace, Button} from 'antd-mobile';



@connect(({app, loading}) => ({app, loading}))
export default class Index extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {

    return (
      <div className={styles.container}>
        <div className={styles["avatar-container"]}>
          <PlaceHolder containerStyle={{ height: 100, width: 100, borderRadius: 50, background: '#f5f5f5', margin: 'auto' }}/>
        </div>

        <div className={styles["info-item"]}>
          <div className={styles.field}>First Name</div>
          <div className={styles.value}>Watertao</div>
        </div>

        <div className={styles["info-item"]}>
          <div className={styles.field}>Second Name</div>
          <div className={styles.value}>Wu</div>
        </div>

        <div className={styles["info-item"]}>
          <div className={styles.field}>Email</div>
          <div className={styles.value}>1059912278@qq.com</div>
        </div>

        <div className={styles["info-item"]}>
          <div className={styles.field}>Mobile</div>
          <div className={styles.value}>13818396274</div>
        </div>

        <div className={styles["info-item"]}>
          <div className={styles.field}>Region</div>
          <div className={styles.value}>China/Shanghai</div>
        </div>

        <WhiteSpace size="lg" />
        <WingBlank>
          <Button size="small">LOG OUT</Button>
        </WingBlank>
        <WhiteSpace size="lg" />

      </div>
    );

  }


}
