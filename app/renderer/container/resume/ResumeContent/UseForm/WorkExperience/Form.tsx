import React, { useCallback, memo } from 'react'
import MyInput from '@/renderer/common/components/MyInput'
import { AdapterExperienceType } from '../WrapperExperience/adapter'
import styles from './index.less'

/**
 * @description Form表单的是否禁用、显示当前最新的表单项、修改当前的表单项
 */
export interface IProps {
  isDisable?: boolean
  currentItem?: AdapterExperienceType
  onChangeCurrentItem?: (item: AdapterExperienceType) => void
}

export default memo(function Form({ isDisable, currentItem, onChangeCurrentItem }: IProps) {
  const onChangeValue = useCallback<(key: string, value: string) => void>(
    (key: string, value: string): void => {
      const newItem: AdapterExperienceType = { ...currentItem, [key]: value }
      onChangeCurrentItem && onChangeCurrentItem(newItem)
    },
    [onChangeCurrentItem, currentItem]
  )
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.require}>*</span>
          <span>公司：</span>
        </div>
        <div className={styles.right}>
          <MyInput
            onChange={(e) => onChangeValue('title', e.target?.value)}
            placeholder='请输入之前就职的公司'
            value={currentItem?.title}
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.require}>*</span>
          <span>职位：</span>
        </div>
        <div className={styles.right}>
          <MyInput
            onChange={(e) => onChangeValue('post', e.target?.value)}
            placeholder='期间担任什么职位'
            value={currentItem?.post}
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.require}>*</span>
          <span>时间：</span>
        </div>
        <div className={styles.right}>
          <MyInput
            onChange={(e) => onChangeValue('beginTime', e.target?.value)}
            placeholder='2015.09.01'
            value={currentItem?.beginTime}
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
          <span className={styles.line} />
          <MyInput
            onChange={(e) => onChangeValue('endTime', e.target?.value)}
            placeholder='2019.06.01'
            value={currentItem?.endTime}
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.left}>
          <span className={styles.require}>*</span>
          <span>内容：</span>
        </div>
        <div className={styles.right}>
          <MyInput
            onChange={(e) => onChangeValue('content', e.target?.value)}
            rows={5}
            type='textarea'
            placeholder='任职期间主要工作是什么呢？'
            value={currentItem?.content}
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  )
})
