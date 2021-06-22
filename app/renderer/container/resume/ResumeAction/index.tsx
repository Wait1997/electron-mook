import React from 'react'
import { useHistory } from 'react-router-dom'
import MyButton from '@r/common/components/MyButton'
import styles from './index.less'

export default function ResumeAction() {
  const { goBack } = useHistory()
  return (
    <div className={styles.actions}>
      <div className={styles.back} onClick={() => goBack()}>
        返回
      </div>
      <MyButton size='middle' className={styles['export-btn']}>
        导出pdf
      </MyButton>
    </div>
  )
}
