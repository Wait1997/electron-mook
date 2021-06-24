import React from 'react'
import { useSelector } from 'react-redux'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import styles from './index.less'

interface IProps {
  onClose(): void
}

export default function Education({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const base: TSResume.Base = useSelector((state: any) => state.resumeReducer.base)

  return (
    <MyModal.Dialog
      title='教育信息'
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
            <span>学校：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/school', e.target?.value)
              }}
              value={base?.school ?? ''}
              placeholder='请输入学校'
              allowClear
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>专业：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/major', e.target?.value)
              }}
              value={base?.major ?? ''}
              placeholder='请输入专业'
              allowClear
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>学位：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('base/degree', e.target?.value)
              }}
              value={base?.degree ?? ''}
              placeholder='请输入学位'
              allowClear
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>学年：</span>
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target?.value
                }
                updateResumeHook<unknown>('base/onSchoolTime', nextTime)
              }}
              value={base?.onSchoolTime?.beginTime ?? ''}
              placeholder='2015.09.01'
              allowClear
              style={{ width: 300 }}
            />
            <span className={styles.line} />
            <MyInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value
                }
                updateResumeHook<unknown>('base/onSchoolTime', nextTime)
              }}
              value={base?.onSchoolTime?.endTime ?? ''}
              placeholder='2019.06.30'
              allowClear
              style={{ width: 300 }}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
