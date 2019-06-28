const GamePad = require("../GamePadPlus");
GamePad.init();
setInterval(GamePad.processEvents,16);
setInterval(GamePad.detectDevices,500);
GamePad.on("axisDown",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" DOWN"));
GamePad.on("axisUp",(id, axis, direction, timestamp)=>console.log("padId:"+id+" axis:"+axis+" direction:"+direction+" UP"));
