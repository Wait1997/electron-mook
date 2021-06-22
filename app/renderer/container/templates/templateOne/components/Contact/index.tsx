import React from 'react'
import styles from '@r/container/templates/styles/styles.less'

export default function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        <li>电话：15000558443</li>
        <li>邮箱：1433193222@qq.com</li>
      </ul>
    </div>
  )
}
