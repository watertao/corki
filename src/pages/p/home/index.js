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
        <div className={styles["stat-container"]}>
          <PlaceHolder containerStyle={{
            position: 'absolute', top: '16px', left: '16px',
            height: 80, width: 80,
            borderRadius: 40, background: '#e8e8e8', }}/>
          <div className={styles["stat"]}>
            <div className={styles["category"]}><div className={styles.value}>143</div><div className={styles.name}>Posts</div></div>
            <div className={styles["category"]}><div className={styles.value}>23</div><div className={styles.name}>Children</div></div>
            <div className={styles["category"]}><div className={styles.value}>44</div><div className={styles.name}>Matrix</div></div>
          </div>
        </div>

        <WingBlank>
          <div className={styles["desc"]}>
            <div className={styles.name}>Watertao</div>
            <div className={styles.value}>What the fuck ? Here should be the descriptions. On piece has coming stage 287!</div>
          </div>
        </WingBlank>

        <WhiteSpace size="xl" />
        <WingBlank>
          <Button type="primary" size="small">My Children</Button>
        </WingBlank>

        <WhiteSpace size="xl" />
        <WingBlank>
          <div className={styles["func-container"]}>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
            <div className={styles["func"]}><PlaceHolder containerStyle={{height: '100%', width: '100%' }} iconSize="22px" /></div>
          </div>
        </WingBlank>


      </div>
    );

  }


}
