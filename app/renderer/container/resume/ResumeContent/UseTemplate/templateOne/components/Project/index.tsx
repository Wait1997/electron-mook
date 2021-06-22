import React from 'react'
import styles from './index.less'

export default function Project() {
  return (
    <div className={styles.content}>
      <p className={styles.label}>项目经历 Projec</p>
      <ul className={styles.list}>
        <li className={styles.flex}>
          <div className={styles.left}>
            <p className={styles.title}>
              <span>2021.03 - 2021.05</span>
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.title}>
              <span>electronMook 可视化建立平台 - 前端工程师</span>
            </p>
          </div>
          <div className={styles.text}>
            <ul className={styles['item-box']}>
              <li className={styles['item-content']}>
                <span>Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
              </li>
              <li className={styles['item-content']}>
                <span>通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档</span>
              </li>
              <li className={styles['item-content']}>
                <span>通过可视化拖拽形式，自定义组件模版</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}
