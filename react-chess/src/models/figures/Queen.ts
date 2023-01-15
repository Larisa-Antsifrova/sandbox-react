import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
// @ts-ignore
import blackLogo from '../../assets/black-queen.png'
// @ts-ignore
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.QUEEN
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    if(this.cell.isEmptyVertical(target)){
      return true
    }

    return false
  }
}