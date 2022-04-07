import * as PIXI from 'pixi.js';
import { GameClass, NetplayPlayer, DefaultInput, Game, RollbackWrapper } from "netplayjs";

const canvasSize = { width: 800, height: 600 };

class App extends Game {
    constructor() {
        super();
        let renderer = new PIXI.Application({ width: 640, height: 360 });
        let p = PIXI.Sprite.from('/public/resources/sprites/mch.jpg');
        p.width = 40;
        p.height = 40;

        renderer.stage.addChild(p);
        this.renderer = renderer;

        document.appendChild(this.renderer.view)
    }

    tick(playerInputs) {
        for (const [player, input] of playerInputs.entries()) {
            
        }
    }

    // Normally, we have to implement a serialize / deserialize function
    // for our state. However, there is an autoserializer that can handle
    // simple states for us. We don't need to do anything here!
    // serialize() {}
    // deserialize(value) {}

    draw(canvas) {
    }
}

App.canvasSize = { width: 0, height: 0 };
App.timestep = 1000/60;

new RollbackWrapper(App).start();