import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.less'

export default function BaseInfo() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeReducer.base)
  return (
    <div className={styles.container}>
      <p className={styles.title}>基本信息 Basic</p>
      <ul className={styles.content}>
        {base?.school && <li className={styles.item}>院校：{base.school}</li>}
        {base?.major && <li className={styles.item}>专业：{base.major}</li>}
        {base?.degree && <li className={styles.item}>学历：{base.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li className={styles.item}>
            学年：{base.onSchoolTime.beginTime} - {base.onSchoolTime.endTime}
          </li>
        )}
        {base?.hometown && <li className={styles.item}>籍贯：{base.hometown}</li>}
      </ul>
    </div>
  )
}
