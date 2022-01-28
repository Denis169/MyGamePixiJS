import * as PIXI from 'pixi.js'
import { Ease, ease } from 'pixi-ease'
import { Globals } from './Globals';
import { DecOne } from './DecOne';
import { DecTwo } from './DecTwo';
import { Menu } from './Menu';

export class MainScene {
  constructor() {
    this.container = new PIXI.Container();
    this.container.sortableChildren = true;
    this.menuStair = new Menu();
    this.menuStair.container.zIndex = 1;
    this.createBackground();
    this.createLogo();
    this.decOne();
    this.decTwo();
    this.createOldStair();
    this.createAustin();
    this.createIconHummer();
  }

  createBackground() {
    this.back = new PIXI.Sprite(Globals.resources['back'].texture);
    this.back.width = 1390;
    this.back.height = 640;
    this.container.addChild(this.back);
  }

  createLogo() {
    this.logo = new PIXI.Sprite(Globals.resources['logo'].texture);
    this.logo.x = 35;
    this.logo.y = 5;
    this.container.sortableChildren = true;
    this.logo.zIndex = 2;
    this.container.addChild(this.logo);
  }

  decOne() {
    const dec = new DecOne();
    dec.container.zIndex = 1.5;
    this.container.addChild(dec.container);
  }

  createOldStair() {
    this.oldStair = new PIXI.Sprite(Globals.resources['oldStair'].texture);
    this.oldStair.x = 1390 - this.oldStair.width;
    this.oldStair.y = 640 - this.oldStair.height;
    this.container.addChild(this.oldStair);
  }

  createAustin() {
    this.austin = new PIXI.Sprite(Globals.resources['austin'].texture);
    this.austin.x = 830 - this.austin.width;
    this.austin.y = 430 - this.austin.height;
    this.container.addChild(this.austin);
  }

  decTwo() {
    const dec = new DecTwo();
    this.container.addChild(dec.container);
  }

  createIconHummer() {
    this.iconHummer = new PIXI.Sprite(Globals.resources['iconHummer'].texture);
    this.iconHummer.x = 1085;
    this.iconHummer.y = 200;
    ease.add(this.iconHummer, { y: 260 }, { duration: 3000, ease: 'easeOutBounce', wait: 2000 })
    this.iconHummer.interactive = true;
    this.iconHummer.buttonMode = true;
    setTimeout(() => this.container.addChild(this.iconHummer), 2000);
    this.iconHummer.on('pointerdown', () => {
      this.container.addChild(this.menuStair.container);
      this.menuStair.container.zIndex = 1;
      this.container.removeChild(this.iconHummer);
    });
  }
}