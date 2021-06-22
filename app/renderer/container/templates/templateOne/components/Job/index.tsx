import React from 'react'
import styles from '@r/container/templates/styles/styles.less'

export default function Job() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>求职意向 Work</p>
      <ul className={styles.content}>
        <li className={styles.item}>职位：前端工程师</li>
        <li className={styles.item}>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  )
}
