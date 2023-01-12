import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
// @ts-ignore
import blackLogo from '../../assets/black-rook.png'
// @ts-ignore
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.ROOK
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    return true
  }
}