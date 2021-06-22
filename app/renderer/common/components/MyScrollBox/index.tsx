import React, { useCallback } from 'react'
import styles from './index.less'

export interface ScrollProps {
  maxHeight: number
  style: React.CSSProperties
  innerStyle: React.CSSProperties
  onScrollTop: (scrollTop: number) => void
}

export default function MyScrollBox({
  maxHeight = 200,
  style = {},
  innerStyle = {},
  children,
  onScrollTop
}: React.PropsWithChildren<Partial<ScrollProps>>) {
  const onScroll = useCallback(
    (e: any) => {
      const event = e.target || e.currentTarget
      onScrollTop && onScrollTop(event.scrollTop)
    },
    [onScrollTop]
  )
  return (
    <div
      className={styles['scroll-box-outer']}
      style={maxHeight ? { ...style, maxHeight: `${maxHeight}` } : style}
      onScroll={onScroll}>
      <div
        className={styles['scroll-box-hidden']}
        style={{
          maxHeight: `${maxHeight}px`
        }}>
        <div className={styles['scroll-box-inter']} style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  )
}
