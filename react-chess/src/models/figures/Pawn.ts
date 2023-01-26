import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
// @ts-ignore
import blackLogo from '../../assets/black-pawn.png'
// @ts-ignore
import whiteLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.PAWN
  }

  isFirstStep: boolean = true

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    const direction = this.cell.figure?.color === Color.BLACK ? 1 : -1
    const firstStepDirection = this.cell.figure?.color === Color.BLACK ? 2 : -2

    if((target.y === this.cell.y + direction || this.isFirstStep
        && target.y === this.cell.y + firstStepDirection)
        && target.x === this.cell.x
        && this.cell.board.getCell(target.x, target.y).isEmpty()){
      return true
    }

    if(target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)){
      return true
    }

    return true
  }

  moveFigure(target: Cell) {
    super.moveFigure(target)

    this.isFirstStep = false
  }
}