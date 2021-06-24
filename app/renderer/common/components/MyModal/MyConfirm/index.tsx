import React from 'react'
import classnames from 'classnames'
import MyButton from '../../MyButton'
import { IConfirmModal } from '../types'
import styles from './index.less'

export default function MyConfirm({
  title,
  width,
  className,
  description,
  renderFooter,
  config = {},
  eleRef
}: IConfirmModal) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config

  return (
    <div className={styles['el-mask']}>
      <div className={styles.center}>
        <div className={classnames(styles['confirm-box'], className)} style={{ width: width || 440 }} ref={eleRef}>
          <div className={styles['confirm-content']}>
            <p className={styles['confirm-title']}>{title || '友情提示'}</p>
            {description && <p className={styles['confirm-desc']}>{description}</p>}
          </div>
          {renderFooter || (
            <div className={styles.footer}>
              {cancelBtn?.isShow && (
                <MyButton
                  size='middle'
                  className={styles['confirm-footer-cancel-btn']}
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback()
                  }}>
                  {cancelBtn.text || '取消'}
                </MyButton>
              )}
              {submitBtn?.isShow && (
                <MyButton
                  size='middle'
                  className={styles['confirm-box-submit-btn']}
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback()
                  }}>
                  {submitBtn?.text || '确定'}
                </MyButton>
              )}
              {deleteBtn?.isShow && (
                <MyButton
                  size='middle'
                  className={styles['confirm-box-delete-btn']}
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback()
                  }}>
                  {deleteBtn?.text || '退出'}
                </MyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
