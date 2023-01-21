import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
// @ts-ignore
import blackLogo from '../../assets/black-bishop.png'
// @ts-ignore
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.BISHOP
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false
    }

    if(this.cell.isEmptyDiagonal(target)){
      return true
    }

    return true
  }
}