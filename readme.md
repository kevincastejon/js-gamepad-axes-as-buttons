# lepioo.gamepad

## Monitor axes as buttons on top of Gamepad library

Original work from [https://www.npmjs.com/package/gamepad](https://www.npmjs.com/package/gamepad)<br>
All the origins events and methods remains unchanged<br>
Usage:
```
const GamePad = require("lepioo.gamepad");
GamePad.init();
setInterval(Gamepad.processEvents,16);
setInterval(Gamepad.detectDevices,500);
GamePad.on("axisDown",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" DOWN"));
GamePad.on("axisUp",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" UP"));
```
[Github sources](https://github.com/lePioo/lepioo.gamepad)
