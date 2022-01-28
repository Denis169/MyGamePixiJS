import * as PIXI from 'pixi.js'
import {Globals} from "./Globals";

export class DecTwo {
  constructor() {
    this.container = new PIXI.Container();
    this.createLayer()
    this.createGlobe()
    this.createPlantOne()
    this.createPlantTwo()
    this.createBookStand()
    this.createTable()
  }

  createLayer() {
    this.layer = new PIXI.Sprite(Globals.resources['layer'].texture);
    this.layer.x = 127;
    this.layer.y = 325;
    this.container.addChild(this.layer);
  }

  createGlobe() {
    this.globe = new PIXI.Sprite(Globals.resources['globe'].texture);
    this.globe.x = 90;
    this.globe.y = 110;
    this.globe.scale.set(1);
    this.container.addChild(this.globe);
  }

  createPlantOne() {
    this.plant = new PIXI.Sprite(Globals.resources['plantOne'].texture);
    this.plant.x = 457;
    this.plant.y = 0;
    this.plant.scale.set(1);
    this.container.addChild(this.plant);
  }

  createPlantTwo() {
    this.plant = new PIXI.Sprite(Globals.resources['plantTwo'].texture);
    this.plant.x = 1140;
    this.plant.y = 160;
    this.plant.scale.set(1);
    this.container.addChild(this.plant);
  }

  createBookStand() {
    this.bookStand = new PIXI.Sprite(Globals.resources['bookStand'].texture);
    this.bookStand.x = 835;
    this.bookStand.y = 0;
    this.bookStand.scale.set(1);
    this.container.addChild(this.bookStand);
  }

  createTable() {
    this.table = new PIXI.Sprite(Globals.resources['table'].texture);
    this.table.x = 200;
    this.table.y = 207;
    this.table.scale.set(1);
    this.container.addChild(this.table);
  }
}