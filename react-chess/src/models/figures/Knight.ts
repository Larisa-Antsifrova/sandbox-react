import { Figure, FigureName } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
// @ts-ignore
import blackLogo from '../../assets/black-knight.png'
// @ts-ignore
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
  constructor(color: Color, cell: Cell) {
    super(color, cell)

    this.logo = color === Color.BLACK ? blackLogo : whiteLogo
    this.name = FigureName.KNIGHT
  }
}