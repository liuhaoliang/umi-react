import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ loading, index }) => ({
  index,
}))
export default class Index extends Component {
  // request("/dashboard/store/?page=1&count=1000")
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'index/fetch',
    });
  }
  render() {
    const {
      index: { response },
    } = this.props;

    return <div className={styles.normal}>首页</div>;
  }
}
