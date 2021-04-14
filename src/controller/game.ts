import { Application, Graphics } from 'pixi.js';
import '/src/style.css';

const app = new Application({
  autoStart: false,
  resizeTo: window
});
document.body.appendChild(app.view);
function createButton(visible: boolean) {
  const button = new Graphics()
    .beginFill(0x0, 0.5)
    .drawRoundedRect(0, 0, 100, 100, 10)
    .endFill()
    .beginFill(0xffffff);
  button.pivot.set(0.5, 0.5);
  button.position.set(app.view.width / 2, app.view.height / 2);
  button.interactive = true;
  button.buttonMode = true;
  button.visible = visible;
  return button;
}

const playButton = createButton(true)
  .moveTo(36, 30)
  .lineTo(36, 70)
  .lineTo(70, 50);

app.stage.addChild(playButton);
app.render();