import { Cell } from './Cell'
import { Color } from './Color'
import { Pawn } from './figures/Pawn'
import { King } from './figures/King'

export class Board {
  cells: Cell[][] = []

  public initCells(){
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []

      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !==0){
          row.push(new Cell(this, j, i, Color.BLACK, null )) // Black cells
        } else {
          row.push(new Cell(this, j, i, Color.WHITE, null )) // White cells
        }
      }

      this.cells.push(row)
    }
  }

  public getCell(x: number,y: number): Cell {
    return this.cells[y][x]
  }

  public addFigures(): void {
    this.addBishops()
    this.addKings()
    this.addRooks()
    this.addQueens()
    this.addPawns()
    this.addKnights()

  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Color.WHITE, this.getCell(i, 1))
      new Pawn(Color.BLACK, this.getCell(i, 6))
    }
  }

  private addKings() {
    new King(Color.WHITE, this.getCell(4, 0))
    new King(Color.BLACK, this.getCell(4, 7))
  }

  private addBishops() {}

  private addKnights() {}
  private addQueens() {}
  private addRooks() {}

}