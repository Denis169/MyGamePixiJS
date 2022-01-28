import * as PIXI from 'pixi.js'
import { Globals } from "./Globals";
import { ChoosedStairFirst } from './ChoosedStairFirst';
import { ChoosedStairSecond } from './ChoosedStairSecond';
import { ChoosedStairThird } from './ChoosedStairThird';

export class Menu {
  constructor() {
    this.container = new PIXI.Container();
    this.backFirst = new ChoosedStairFirst(842);
    this.backSecond = new ChoosedStairSecond(970);
    this.backThird = new ChoosedStairThird(1100);
    this.createFirstBackStair()
    this.createFirstStairLogo()
    this.createSecondBackStair()
    this.createSecondStairLogo()
    this.createThirdBackStair()
    this.createThirdStairLogo()
  }

  createFirstBackStair() {
    this.firstBackForStair = new PIXI.Sprite(Globals.resources['backForStair'].texture);
    this.firstBackForStair.x = 850;
    this.firstBackForStair.y = 10;
    this.container.addChild(this.firstBackForStair);
  }

  createFirstStairLogo() {
    this.firstStairLogo = new PIXI.Sprite(Globals.resources['firstStairLogo'].texture);
    this.firstStairLogo.x = 872;
    this.firstStairLogo.y = 10;
    this.firstStairLogo.interactive = true;
    this.firstStairLogo.buttonMode = true;
    this.container.addChild(this.firstStairLogo);
    this.firstStairLogo.on('pointerdown', () => {
      this.container.addChild(this.backFirst.container);
      this.container.removeChild(this.backSecond.container);
      this.container.removeChild(this.backThird.container);
    });
  }

  createSecondBackStair() {
    this.backForStair = new PIXI.Sprite(Globals.resources['backForStair'].texture);
    this.backForStair.x = 980;
    this.backForStair.y = 10;
    this.container.addChild(this.backForStair);
  }

  createSecondStairLogo() {
    this.secondStairLogo = new PIXI.Sprite(Globals.resources['secondStairLogo'].texture);
    this.secondStairLogo.x = 1002;
    this.secondStairLogo.y = 10;
    this.secondStairLogo.interactive = true;
    this.secondStairLogo.buttonMode = true;
    this.container.addChild(this.secondStairLogo);
    this.secondStairLogo.on('pointerdown', () => {
      this.container.addChild(this.backSecond.container);
      this.container.removeChild(this.backFirst.container);
      this.container.removeChild(this.backThird.container);
    });
  }

  createThirdBackStair() {
    this.backForStair = new PIXI.Sprite(Globals.resources['backForStair'].texture);
    this.backForStair.x = 1110;
    this.backForStair.y = 10;
    this.container.addChild(this.backForStair);
  }

  createThirdStairLogo() {
    this.thirdStairLogo = new PIXI.Sprite(Globals.resources['thirdStairLogo'].texture);
    this.thirdStairLogo.x = 1132;
    this.thirdStairLogo.y = 10;
    this.thirdStairLogo.interactive = true;
    this.thirdStairLogo.buttonMode = true;
    this.container.addChild(this.thirdStairLogo);
    this.thirdStairLogo.on('pointerdown', () => {
      this.container.addChild(this.backThird.container);
      this.container.removeChild(this.backFirst.container);
      this.container.removeChild(this.backSecond.container);
    });
    this.thirdStairLogo.zIndex = 1;
  }

}