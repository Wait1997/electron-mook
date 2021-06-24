import React from 'react'

type Position = 'top' | 'bottom' | 'center'

interface BtnConfig {
  text?: string
  isShow?: boolean
  callback?: () => void
}

interface IModal {
  title: string
  width?: number
  className?: string
  description?: string
  position?: Position
  showFooter?: boolean
  renderFooter?: React.ReactNode
  config?: {
    cancelBtn?: BtnConfig
    submitBtn?: BtnConfig
    deleteBtn?: BtnConfig
  }
  eleRef?: React.LegacyRef<HTMLDivElement> | undefined
}

export type IConfirmModal = IModal

export interface IDialogModal extends IModal {
  childStyle?: React.CSSProperties
}
