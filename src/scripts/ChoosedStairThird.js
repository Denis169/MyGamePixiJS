import * as PIXI from 'pixi.js'
import {Globals} from "./Globals";
import {ease} from "pixi-ease";
import {MenuOk} from "./MenuOk";

export class ChoosedStairThird {
  constructor(xOk) {
    this.container = new PIXI.Container();
    this.createOk(xOk);
    this.createNewThirdBackStair();
    this.createNewThirdStair();
    this.createThirdStairLogo();
  }

  createThirdStairLogo() {
    this.thirdStairLogo = new PIXI.Sprite(Globals.resources['thirdStairLogo'].texture);
    this.thirdStairLogo.x = 1132;
    this.thirdStairLogo.y = 10;
    this.container.addChild(this.thirdStairLogo);
  }

  createNewThirdBackStair() {
    this.newBackForStair = new PIXI.Sprite(Globals.resources['chosenBackForStair'].texture);
    this.newBackForStair.x = 1112;
    this.newBackForStair.y = 10;
    this.container.addChild(this.newBackForStair);
  }

  createOk(xOk) {
    this.menuOk = new MenuOk(xOk);
    this.container.sortableChildren = true;
    this.menuOk.container.zIndex = 4;
    this.container.addChild(this.menuOk.container);
  }

  createNewThirdStair() {
    this.newThirdStair = new PIXI.Sprite(Globals.resources['newThirdStair'].texture);
    this.newThirdStair.x = 1390 - this.newThirdStair.width;
    this.newThirdStair.y = 500 - this.newThirdStair.height;
    this.newThirdStair.alpha = 0;
    ease.add(this.newThirdStair, { y: 640 - this.newThirdStair.height, alpha: 1 }, {duration: 5000, ease: "easeInExpo"})
    this.container.addChild(this.newThirdStair);
  }
}
