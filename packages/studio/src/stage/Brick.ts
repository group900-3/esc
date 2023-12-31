import { Graphics } from "pixi.js";
import {
  BrickType,
  presetBrickTypeData,
  presetBrickTypeInfo,
} from "../presets";
import { CELL_SIZE } from "../constants";

export class Brick extends Graphics {
  constructor(type: BrickType) {
    super();
    const data = presetBrickTypeData[type];
    const info = presetBrickTypeInfo[type];

    this.create(data, info.color);
  }

  create(data: (0 | 1)[][], color: string) {
    this.beginFill(color);
    for (let r = 0; r < data.length; r++) {
      for (let c = 0; c < data[r].length; c++) {
        if (data[r][c]) {
          this.drawRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }
    this.endFill();
  }
}
