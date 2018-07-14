# lepioo.gamepad

## Monitor axes as buttons on top of Gamepad library

Original work from [https://www.npmjs.com/package/gamepad](https://www.npmjs.com/package/gamepad)<br>
All the origins events and methods remains unchanged<br>
Usage:
```
const GamePad = require("lepioo.gamepad");
gamepad.init();
gamepad.on("axisDown",(axis, direction, timestamp)=>console.log("axis":+axis+" direction:"+direction+" DOWN"));
gamepad.on("axisUp",(axis, direction, timestamp)=>console.log("axis":+axis+" direction:"+direction+" UP"));
```
[Github sources](https://github.com/lePioo/lepioo.gamepad)
