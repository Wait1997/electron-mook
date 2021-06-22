import React from 'react'
import styles from './index.less'

export default function BaseInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>基本信息 Basic</p>
      <ul className={styles.content}>
        <li className={styles.item}>院校：家里蹲大学</li>
        <li className={styles.item}>专业：计算机科学与技术</li>
        <li className={styles.item}>学历：幼儿园</li>
        <li className={styles.item}>学年：2002.09 - 2005.06</li>
        <li className={styles.item}>籍贯：山东·曹县</li>
      </ul>
    </div>
  )
}
