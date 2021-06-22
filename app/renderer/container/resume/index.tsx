import React from 'react'
// import fileAction from '@r/common/utils/file'
// import { getAppPath } from '@r/common/utils/appPath'
import ResumeAction from './ResumeAction'
import ResumeContent from './ResumeContent'
import ResumeToolbar from './ResumeToolbar'
import styles from './index.less'

export default function Resume() {
  // getAppPath().then((rootPath: string) => {
  //   fileAction.read(`${rootPath}/app/renderer/container/resume/index.tsx`).then((content) => {})
  // })

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <ResumeAction />
      </div>
      <div className={styles.content}>
        <ResumeContent />
      </div>
      <div className={styles.toolbar}>
        <ResumeToolbar />
      </div>
    </div>
  )
}
