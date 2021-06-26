import React from 'react'
import { useSelector } from 'react-redux'
import useUpdateResumeHook from '@r/container/resume/ResumeContent/useUpdateResumeHook'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import ReCommendSkill, { IRecommendSkill } from '@/renderer/common/constants/skill'
import styles from './index.less'

interface IProps {
  onClose: () => void
}

export default function Skill({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook()
  const skill: string = useSelector((state: any) => state.resumeReducer.skill)
  return (
    <MyModal.Dialog
      title='技能清单'
      config={{
        cancelBtn: {
          callback: onClose
        }
      }}>
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>
            <span>技能：</span>
          </div>
          <div className={styles.right}>
            <div className={styles.action}>
              {ReCommendSkill.map((recommend: IRecommendSkill) => {
                return (
                  <div
                    className={styles.label}
                    key={recommend.uid}
                    style={{
                      color: recommend?.styles?.font,
                      borderColor: recommend?.styles?.font,
                      backgroundColor: recommend?.styles?.bg
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '｜' : ''}${recommend.label}`
                      updateResumeHook<string>('skill', value)
                    }}>
                    {recommend.label}
                  </div>
                )
              })}
            </div>
            <MyInput
              type='textarea'
              rows={5}
              value={skill}
              placeholder='React、Vue'
              onChange={(e) => {
                updateResumeHook<string>('skill', e.target?.value)
              }}
              allowClear
            />
            <div className={styles.tips}>* 多个技能以｜分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
