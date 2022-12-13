import { Color } from './Color'
// @ts-ignore
import logo from '../../assets/black-bishop.png'
import { Cell } from './Cell'

export enum FigureName {
  FIGURE = 'FIGURE',
  KING = 'KING',
  KNIGHT = 'KNIGHT',
  PAWN = 'PAWN',
  QUEEN = 'QUEEN',
  ROOK = 'ROOK',
  BISHOP = 'BISHOP',
}

export class Figure {
  color: Color
  logo: typeof logo
  cell: Cell
  name: FigureName
  id: number

  constructor(color: Color, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureName.FIGURE
    this.id = Math.random()
  }

}