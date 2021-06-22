import React from 'react'
import styles from './index.less'

export default function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>联系方式 Contact</p>
      <ul className={styles.content}>
        <li className={styles.item}>电话：15000558443</li>
        <li className={styles.item}>邮箱：1433193222@qq.com</li>
      </ul>
    </div>
  )
}
