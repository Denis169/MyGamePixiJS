import * as PIXI from 'pixi.js'
import {Globals} from "./Globals";

export class DecOne {
  constructor() {
    this.container = new PIXI.Container();
    this.createDecOne();
  }

  createDecOne() {
    this.decOne = new PIXI.Sprite(Globals.resources['decOne'].texture);
    this.decOne.x = 1390 - this.decOne.width;
    this.decOne.y = 640 - this.decOne.height;
    this.container.addChild(this.decOne);
  }
}