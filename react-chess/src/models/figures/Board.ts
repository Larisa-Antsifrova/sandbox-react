import { Cell } from './Cell'

export class Board {
  cells: Cell[][] = []

  public initCells(){
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []

      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !==0){
          row.push(new Cell()) // Black cells
        } else {
          row.push(new Cell()) // White cells
        }
      }

      this.cells.push(row)
    }
  }
}