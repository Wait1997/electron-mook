import React from 'react'
import styles from '@r/container/templates/styles/styles.less'

export default function Certificate() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>荣誉奖励 Certificate</p>
      <ul className={styles.content}>
        <li>全国放屁第一名</li>
        <li>全国吃屎第一名</li>
        <li>全国拉屎第一名</li>
        <li>全国吹牛第一名</li>
      </ul>
    </div>
  )
}
