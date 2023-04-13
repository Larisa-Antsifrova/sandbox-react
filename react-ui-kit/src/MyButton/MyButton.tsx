import React, {FC} from 'react'

export interface MyButtonProps {
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