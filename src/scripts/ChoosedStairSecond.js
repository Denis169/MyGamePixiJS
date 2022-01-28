import * as PIXI from 'pixi.js'
import {Globals} from "./Globals";
import {ease} from "pixi-ease";
import {MenuOk} from "./MenuOk";

export class ChoosedStairSecond {
  constructor(xOk) {
    this.container = new PIXI.Container();
    this.createOk(xOk);
    this.createNewSecondStair();
    this.createNewSecondBackStair();
    this.createSecondStairLogo();
  }

  createSecondStairLogo() {
    this.secondStairLogo = new PIXI.Sprite(Globals.resources['secondStairLogo'].texture);
    this.secondStairLogo.x = 1002;
    this.secondStairLogo.y = 10;
    this.container.addChild(this.secondStairLogo);
  }

  createNewSecondBackStair() {
    this.newBackForStair = new PIXI.Sprite(Globals.resources['chosenBackForStair'].texture);
    this.newBackForStair.x = 982;
    this.newBackForStair.y = 10;
    this.container.addChild(this.newBackForStair);
  }

  createOk(xOk) {
    this.menuOk = new MenuOk(xOk);
    this.container.sortableChildren = true;
    this.menuOk.container.zIndex = 4;
    this.container.addChild(this.menuOk.container);
  }

  createNewSecondStair() {
    this.newSecondStair = new PIXI.Sprite(Globals.resources['newSecondStair'].texture);
    this.newSecondStair.x = 1390 - this.newSecondStair.width;
    this.newSecondStair.y = -100;
    this.newSecondStair.alpha = 0;
    ease.add(this.newSecondStair, { y: 30, alpha: 1 }, {duration: 5000, ease: "easeInExpo"})
    this.container.addChild(this.newSecondStair);
  }
}
