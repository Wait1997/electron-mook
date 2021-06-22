import React from 'react'
import AvatarImage from '@a/avatar.jpg'
import styles from './index.less'

export default function Avatar() {
  return (
    <div className={styles.box}>
      <div className={styles.avatar}>
        <img src={AvatarImage} alt='' />
      </div>
    </div>
  )
}
