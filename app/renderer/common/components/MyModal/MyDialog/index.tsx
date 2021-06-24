import React, { PropsWithChildren } from 'react'
import classnames from 'classnames'
import MyButton from '../../MyButton'
import { IDialogModal } from '../types'
import styles from './index.less'

export default function MyDialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  childStyle,
  children
}: PropsWithChildren<IDialogModal>) {
  const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config

  return (
    <div className={styles['el-mask']}>
      <div className={styles.center}>
        <div className={classnames(styles['dialog-box'], className)} style={{ width: width || 760 }} ref={eleRef}>
          <div className={styles['dialog-header']}>{title || '提示您'}</div>
          <div
            className={styles['dialog-close']}
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback()
            }}
          />
          <div className={styles['dialog-content']} style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div className={styles.footer}>
                {cancelBtn?.isShow && (
                  <MyButton
                    size='middle'
                    className={styles['dialog-footer-cancel-btn']}
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback()
                    }}>
                    {cancelBtn.text || '取消'}
                  </MyButton>
                )}
                {submitBtn?.isShow && (
                  <MyButton
                    size='middle'
                    className={styles['dialog-box-submit-btn']}
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback()
                    }}>
                    {submitBtn?.text || '确定'}
                  </MyButton>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
