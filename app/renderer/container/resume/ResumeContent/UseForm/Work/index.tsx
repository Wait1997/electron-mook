import React from 'react'
import { useSelector } from 'react-redux'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import styles from './index.less'

interface IProps {
  onClose: () => void
}

export default function Work({ onClose }: IProps) {
  const work: TSResume.Work = useSelector((state: any) => state.resumeReducer.work)
  return (
    <MyModal.Dialog
      title='工作期望'
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
            <span>职位</span>
          </div>
          <div className={styles.right}>
            <MyInput onChange={(e) => {}} value={work?.job ?? ''} placeholder='求职岗位' allowClear />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>城市</span>
          </div>
          <div className={styles.right}>
            <MyInput onChange={(e) => {}} value={work?.city ?? ''} placeholder='请输入意愿城市' allowClear />
            <div className={styles.tips}> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
