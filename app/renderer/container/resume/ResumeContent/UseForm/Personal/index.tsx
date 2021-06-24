import React from 'react'
import { useSelector } from 'react-redux'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import MyModal from '@r/common/components/MyModal'
import MyInput from '@r/common/components/MyInput'
import styles from './index.less'

interface IProps {
  onClose: () => void
}

export default function Personal({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const hobby: string = useSelector((state: any) => state.resumeReducer.hobby)
  const base: TSResume.Base = useSelector((state: any) => state.resumeReducer.base)

  return (
    <MyModal.Dialog title='个人信息' showFooter={false} config={{ cancelBtn: { callback: onClose } }}>
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>姓名：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/username', e.target?.value)
              }}
              value={base?.username || ''}
              placeholder='请输入姓名'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>籍贯：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/hometown', e.target?.value)
              }}
              value={base?.hometown || ''}
              placeholder='请输入籍贯'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>爱好：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              type='textarea'
              rows={3}
              onChange={(e) => {
                updateResumeHook<string>('hobby', e.target?.value ?? '')
              }}
              value={hobby || ''}
              placeholder='你有什么特长爱好'
              allowClear
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
