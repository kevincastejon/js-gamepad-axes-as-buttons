# js-gamepad-axes-as-buttons

## Monitor axes as buttons on top of Gamepad library

Original work from [https://www.npmjs.com/package/gamepad](https://www.npmjs.com/package/gamepad)<br>
All events and methods of the original API remain unchanged<br>
Usage:
```
const GamePad = require("lepioo.gamepad");
GamePad.init();

setInterval(GamePad.processEvents,16);
setInterval(GamePad.detectDevices,500);

GamePad.on("axisDown",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" DOWN"));
GamePad.on("axisUp",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" UP"));
```
[Github sources](https://github.com/kevincastejon/js-gamepad-axes-as-buttons)
