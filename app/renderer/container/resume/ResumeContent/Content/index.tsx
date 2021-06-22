import React, { PropsWithChildren } from 'react'

export type Extratype = PropsWithChildren<{
  className?: string
}>

export default function Content({ className, children }: Extratype) {
  return <div className={className}>{children}</div>
}
