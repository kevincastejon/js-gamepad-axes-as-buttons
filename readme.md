# lepioo.gamepad

## Monitor axes as buttons on top of Gamepad library

Original work from [https://www.npmjs.com/package/gamepad](https://www.npmjs.com/package/gamepad)
All the origins events and methods remains unchanged
Usage:
```
const GamePad = require("lepioo.gamepad");
var gamepad=new GamePad();
gamepad.init();
gamepad.on("axisDown",(axis, direction, timestamp)=>console.log("axis":+axis+" direction:"+direction+" DOWN"));
gamepad.on("axisUp",(axis, direction, timestamp)=>console.log("axis":+axis+" direction:"+direction+" UP"));
```
[Github sources](https://github.com/lePioo/lepioo.gamepad)
