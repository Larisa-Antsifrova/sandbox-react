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

    return true
  }
}