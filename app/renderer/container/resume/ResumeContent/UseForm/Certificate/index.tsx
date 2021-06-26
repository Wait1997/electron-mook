import React from 'react'
import { useSelector } from 'react-redux'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import styles from './index.less'

interface IProps {
  onClose: () => void
}

export default function Certificate({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const certificate: string = useSelector((state: any) => state.resumeReducer.certificate)
  return (
    <MyModal.Dialog
      title='荣誉证书'
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.require}>*</span>
          <span>证书：</span>
        </div>
        <div className={styles.right}>
          <MyInput
            type='textarea'
            onChange={(e) => {
              updateResumeHook<string>('certificate', e.target?.value)
            }}
            rows={5}
            value={certificate ?? ''}
            placeholder='互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖'
            allowClear
          />
        </div>
      </div>
    </MyModal.Dialog>
  )
}
