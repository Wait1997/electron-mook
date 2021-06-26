import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.less'

export default function Job() {
  const work: TSResume.Work = useSelector((state: any) => state.resumeReducer.work)
  return (
    <div className={styles.container}>
      <p className={styles.title}>求职意向 Work</p>
      <ul className={styles.content}>
        {work?.job && <li className={styles.item}>职位：{work.job}</li>}
        {work?.city && <li className={styles.item}>城市：{work.city}</li>}
      </ul>
    </div>
  )
}
