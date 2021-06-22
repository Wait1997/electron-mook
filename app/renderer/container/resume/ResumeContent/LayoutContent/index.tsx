import React, { forwardRef, PropsWithChildren, ForwardedRef } from 'react'
import classnames from 'classnames'
import styles from './index.less'

export interface Props {
  className?: string
}

const LayoutContent = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ className, children }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles['a4-box']}>
        <div ref={ref} className={classnames(styles.flex, className)}>
          {children}
        </div>
      </div>
    )
  }
)

export default LayoutContent
