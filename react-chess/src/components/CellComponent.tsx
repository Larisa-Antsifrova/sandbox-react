import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
  isSelected: boolean
}

const CellComponent: FC<CellProps> = ({cell, isSelected}) => {
  return (
    <div className={['cell', cell.color, isSelected ? 'selected' : ''].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
      </div>
  )
}

export default CellComponent