import React, { FC } from 'react'
import { Figure } from '../models/figures/Figure'

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
    </div>
  )
}

export default LostFigures