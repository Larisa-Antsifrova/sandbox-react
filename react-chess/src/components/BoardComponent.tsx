import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell): void {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
      updateBoard()
    } else {
      setSelectedCell(cell)
    }
  }

  useEffect(()=>{highlightCells()}, [selectedCell])

  function highlightCells(): void {
    board.highlightCells(selectedCell)

    updateBoard()
  }

  function updateBoard(): void {
    const newBoard = board.getCopyBoard()

    setBoard(newBoard)
  }

    return (
        <div className={'board'}>
          {board.cells.map((row, index) =>
              <React.Fragment key={index}>
                {row.map(cell => <CellComponent
                  click={ click }
                  cell={cell}
                  key={cell.id}
                  isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>)}
              </React.Fragment>)
          }
        </div>
    );
};

export default BoardComponent;