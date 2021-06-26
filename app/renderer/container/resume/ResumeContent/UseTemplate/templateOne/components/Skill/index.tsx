import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.less'

export default function Skill() {
  const skill: string = useSelector((state: any) => state.resumeReducer.skill)
  const skillList: string[] = useSelector((state: any) => state.resumeReducer.skillList)

  return (
    <div className={styles.content}>
      <p className={styles.label}>技能证书 Skill</p>
      <ul className={styles.skill}>
        {skill &&
          skillList?.length > 0 &&
          skillList.map((skill, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li className={styles.item} key={index}>
                {skill}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
