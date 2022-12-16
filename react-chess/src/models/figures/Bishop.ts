import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'

import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.BISHOP
  }
}