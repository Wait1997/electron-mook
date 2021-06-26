import React from 'react'
import { useSelector } from 'react-redux'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import styles from './index.less'

interface IProps {
  onClose(): void
}
export default function Contact({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeReducer.contact)

  return (
    <MyModal.Dialog
      title='联系方式'
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}>
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>电话：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/phone', e.target?.value)
              }}
              value={contact?.phone ?? ''}
              placeholder='请输入电话号码'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>邮箱：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/email', e.target?.value)
              }}
              value={contact?.email ?? ''}
              placeholder='请输入邮箱'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>Github地址：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/github', e.target?.value)
              }}
              value={contact?.github ?? ''}
              placeholder='请输入github地址'
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>掘金地址：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/juejin', e.target?.value)
              }}
              value={contact?.juejin ?? ''}
              placeholder='请输入掘金地址'
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
