import React from 'react';
import styles from './profile.css';
import { history } from 'umi'

function Profile() {
  return (
    <div>
      <h1 className={styles.title}>Page profile</h1>
      <button onClick={() => history.goBack()}>返回</button>
    </div>
  );
}

// Profile.wrappers = ['@/wrappers/auth']
Profile.wrappers = ['@/wrappers/auth']
export default Profile
