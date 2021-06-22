import React from 'react'
import MyScrollBox from '@/renderer/common/components/MyScrollBox'
import * as UseTemplate from './UseTemplate'

export default function ResumeContent() {
  const HEAD_ACTION_HEIGHT = 92
  const height = document.documentElement.clientHeight
  return (
    <MyScrollBox maxHeight={height - HEAD_ACTION_HEIGHT}>
      <UseTemplate.TemplateOne />
    </MyScrollBox>
  )
}
