/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react'
import cn from 'classnames'
import deleteIcon from '@a/icon/delete.png'
import { AdapterExperienceType } from '../../adapter'
import styles from './index.less'

export interface IListProps {
  /**
   * @description 当前操作的索引
   */
  index: number
  /**
   * 条目列表
   */
  experienceList: AdapterExperienceType[]
  /**
   * @description 删除条目回调
   */
  onDelete: (index: number) => void
  /**
   * @description 选择条目回调
   */
  onChange: (index: number) => void
}

export default memo(function List({ index, experienceList, onChange, onDelete }: IListProps) {
  return (
    <div className={styles['experience-list']}>
      {experienceList &&
        experienceList.length > 0 &&
        experienceList.map((item, i) => {
          return (
            <div
              className={cn(styles['experience-item'], {
                [`${styles['is-select']}`]: i === index
              })}
              key={i}
              onClick={() => {
                onChange(i)
              }}>
              <div className={styles['experience-item-box']}>
                <div className={styles['experience-item-title']}>{item.title}</div>
                <div className={styles['experience-item-date']}>{item?.date}</div>
              </div>
              <div className={styles['experience-item-action']}>
                <div
                  className={styles['experience-delete']}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation && e.stopPropagation()
                    onDelete(i)
                  }}>
                  <img className={styles['delete-icon']} src={deleteIcon} alt='' />
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
})
