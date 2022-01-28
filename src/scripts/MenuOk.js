import * as PIXI from 'pixi.js'
import { Globals } from './Globals';
import { FinalWindow } from './FinalWindow';

export class MenuOk {
  constructor(xOk, final) {
    this.container = new PIXI.Container();
    this.background = new FinalWindow();
    this.createOk(xOk, final);
  }

  createOk(xOk) {
    this.okButton = new PIXI.Sprite(Globals.resources['ok'].texture);
    this.okButton.x = xOk;
    this.okButton.y = 125;
    this.okButton.interactive = true;
    this.okButton.buttonMode = true;
    this.okButton.on('pointerdown', () => {
      this.container.addChild(this.background.containerFinal);
    });
    this.container.addChild(this.okButton);
  }
}