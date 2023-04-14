import React, { FC, ReactNode } from 'react'

export interface MyButtonProps {
  children: ReactNode
  color: string
  big: boolean
}

const MyButton: FC<MyButtonProps> = ({children, ...props}) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default MyButton