import React from 'react'

interface IProps {
  text: string
  styles: React.CSSProperties
}

export default function Title({ text, styles }: IProps) {
  return <div style={styles}>{text}</div>
}
