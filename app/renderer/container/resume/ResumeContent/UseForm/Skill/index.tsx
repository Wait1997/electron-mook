import React from 'react'
import { useSelector } from 'react-redux'
import MyModal from '@/renderer/common/components/MyModal'
import MyInput from '@/renderer/common/components/MyInput'
import ReCommendSkill, { IRecommendSkill } from '@/renderer/common/constants/skill'
import styles from './index.less'

interface IProps {
  onClose: () => void
}

export default function Skill({ onClose }: IProps) {
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
              {ReCommendSkill.map((skill: IRecommendSkill) => {
                return (
                  <div
                    className={styles.label}
                    key={skill.uid}
                    style={{
                      color: skill?.styles?.font,
                      borderColor: skill?.styles?.font,
                      backgroundColor: skill?.styles?.bg
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '｜' : ''}${skill.label}`
                    }}>
                    {skill.label}
                  </div>
                )
              })}
            </div>
            <MyInput type='textarea' rows={5} value={skill} placeholder='React、Vue' onChange={(e) => {}} allowClear />
            <div className={styles.tips}>* 多个技能以｜分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  )
}
