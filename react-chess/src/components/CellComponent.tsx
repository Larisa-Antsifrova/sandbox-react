import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
  isSelected: boolean
  click: (cell: Cell) => void
}


const CellComponent: FC<CellProps> = ({cell, isSelected, click}) => {
  return (
    <div
      className={['cell', cell.color, isSelected ? 'selected' : ''].join(' ')}
      onClick={()=> click(cell)}
    >
      {cell.available && !cell.figure && <div className={'available'} style={{background: cell.available && !cell.figure ? 'green': ''}}></div>}

      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
      </div>
  )
}

export default CellComponent