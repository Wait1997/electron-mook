import React, { memo } from 'react'
import cn from 'classnames'
import { AdapterExperienceType } from '../adapter'
import styles from './index.less'

export interface IProps {
  /**
   * @description 当前是否处于可编辑状态
   */
  isEdit: boolean
  /**
   * 当前的条目
   */
  currentItem: AdapterExperienceType
  /**
   * @description 点击取消
   */
  onCancelEditValue: () => void
  /**
   * @description 点击保存
   */
  onSaveEditValue: () => void
  /**
   * @description 点击编辑
   */
  onChangeEditStatus: () => void
}

export default memo(function Menu({
  currentItem,
  isEdit,
  onCancelEditValue,
  onSaveEditValue,
  onChangeEditStatus
}: IProps) {
  return (
    <div className={styles.menu}>
      <div className={styles.left}>
        <div className={styles.title}>{currentItem?.title ?? ''}</div>
      </div>
      <div className={styles.right}>
        {isEdit && (
          <>
            <div className={cn(styles.btn, styles.cancel)} onClick={onCancelEditValue}>
              取消
            </div>
            <div className={cn(styles.btn, styles.save)} onClick={onSaveEditValue}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div className={cn(styles.btn, styles.cancel)} onClick={onChangeEditStatus}>
            编辑
          </div>
        )}
      </div>
    </div>
  )
})
