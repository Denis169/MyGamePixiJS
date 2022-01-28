import * as PIXI from 'pixi.js'
import { Globals } from "./Globals";
import { ease } from "pixi-ease";
import { MenuOk } from "./MenuOk";

export class ChoosedStairFirst {
  constructor(xOk) {
    this.container = new PIXI.Container();
    this.createOk(xOk);
    this.createNewFirstStair();
    this.createNewFirstBackStair();
    this.createFirstStairLogo();
  }

  createFirstStairLogo() {
    this.firstStairLogo = new PIXI.Sprite(Globals.resources['firstStairLogo'].texture);
    this.firstStairLogo.x = 872;
    this.firstStairLogo.y = 10;
    this.container.addChild(this.firstStairLogo);
  }

  createNewFirstBackStair() {
    this.newBackForStair = new PIXI.Sprite(Globals.resources['chosenBackForStair'].texture);
    this.newBackForStair.x = 854;
    this.newBackForStair.y = 10;
    this.container.addChild(this.newBackForStair);

  }

  createOk(xOk) {
    this.menuOk = new MenuOk(xOk);
    this.container.sortableChildren = true;
    this.menuOk.container.zIndex = 4;
    this.container.addChild(this.menuOk.container);
  }

  createNewFirstStair() {
    this.newFirstStair = new PIXI.Sprite(Globals.resources['newFirstStair'].texture);
    this.newFirstStair.x = 1390 - this.newFirstStair.width;
    this.newFirstStair.y = 500 - this.newFirstStair.height;
    this.newFirstStair.alpha = 0;
    ease.add(this.newFirstStair, { y: 640 - this.newFirstStair.height, alpha: 1 }, {duration: 5000, ease: "easeInExpo"})
    this.container.addChild(this.newFirstStair);
  }
}
