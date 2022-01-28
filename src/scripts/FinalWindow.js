import * as PIXI from 'pixi.js'
import { Globals } from "./Globals";
import {ease} from "pixi-ease";


export class FinalWindow {
  constructor() {
    this.containerFinal = new PIXI.Container();
    this.createFinalBackground();
    this.createFinalPicture();
    this.createFinalContinue();
  }

  createFinalBackground() {
    this.background = new PIXI.Sprite(Globals.resources['background'].texture);
    this.background.alpha = 0.5;
    this.containerFinal.addChild(this.background);
  }

  createFinalPicture() {
    this.finalPicture = new PIXI.Sprite(Globals.resources['finalPicture'].texture);
    this.finalPicture.x = 390;
    this.finalPicture.y = 50;
    this.containerFinal.addChild(this.finalPicture);
    this.finalPicture.zIndex = 6;
  }

  createFinalContinue() {
    this.finalContinue = new PIXI.Sprite(Globals.resources['finalContinue'].texture);
    this.finalContinue.x = 525;
    this.finalContinue.y = 490;
    this.finalContinue.width = 360;
    this.finalContinue.height = 120;
    this.finalContinue.interactive = true;
    this.finalContinue.buttonMode = true;
    ease.add(this.finalContinue, {x: 535, width: 330, height: 110}, {duration: 3000, repeat: true})
    this.containerFinal.addChild(this.finalContinue);
    this.finalContinue.zIndex = 6;
  }
}