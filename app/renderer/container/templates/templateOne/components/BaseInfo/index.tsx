import React from 'react'
import styles from '@r/container/templates/styles/styles.less'

export default function BaseInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>基本信息 Basic</p>
      <ul className={styles.content}>
        <li>院校：家里蹲大学</li>
        <li>专业：计算机科学与技术</li>
        <li>学历：幼儿园</li>
        <li>学年：2002.09 - 2005.06</li>
        <li>籍贯：山东·曹县</li>
      </ul>
    </div>
  )
}
