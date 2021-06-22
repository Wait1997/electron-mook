import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

export interface Button {
  /**
   * @description 按钮大小
   */
  size: 'middle' | 'big' | 'small'
  width: number
  style: React.CSSProperties
  disabled: boolean
  className: string
  border: boolean
  onClick(): void
}

export default function MyButton({
  size = 'small',
  style,
  width,
  children,
  disabled = false,
  className,
  onClick,
  border = true
}: Partial<React.PropsWithChildren<Button>>) {
  return (
    <div
      style={{ ...style, width }}
      className={classnames(className, {
        [`${styles['es-button']}`]: true,
        [`${styles[`es-button-${size}`]}`]: true,
        [`${styles['es-button-disabled']}`]: disabled,
        [`${styles['es-button-border']}`]: border
      })}
      onClick={() => onClick && onClick()}>
      {children}
    </div>
  )
}
