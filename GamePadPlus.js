const Gamepad = require("gamepad");
const EventEmitter = require('events');

class GamePadPlus extends EventEmitter {
  constructor() {
    super();
    this.deadZone = 0.2;
  }
  init(inputInterval = 16, detectInterval = 500) {
    Gamepad.init();
    Gamepad.on("attach", (id, state) => onAttach(id, state));
    Gamepad.on("remove", (id) => onRemove(id));
    Gamepad.on("down", (id, buttonId, timestamp) => this.onDown(id, buttonId, timestamp));
    Gamepad.on("up", (id, buttonId, timestamp) => this.onUp(id, buttonId, timestamp));
    Gamepad.on("move", (id, axis, value, lastValue, timestamp) => this.onMove(axis, value, lastValue, timestamp));
    setInterval(Gamepad.processEvents, inputInterval);
    setInterval(Gamepad.detectDevices, detectInterval);
  }
  onAttach(id, state) {
    this.emit("attach", id, state);
  }
  onRemove(id) {
    this.emit("remove", id);
  }
  onDown(id, buttonId, timestamp) {
    this.emit("down", id, buttonId, timestamp);
  }
  onUp(id, buttonId, timestamp) {
    this.emit("up", id, buttonId, timestamp);
  }
  onMove(axis, value, lastValue, timestamp) {
    this.emit("move",axis, value, lastValue, timestamp);
    if (value > this.deadZone && lastValue < this.deadZone) {
      this.emit("axisDown", axis, 1, value, lastValue, timestamp);
    } else if (value < -this.deadZone && lastValue > -this.deadZone) {
      this.emit("axisDown", axis, 0, value, lastValue, timestamp);
    } else if ((value > -this.deadZone && value < this.deadZone) && (lastValue < -this.deadZone || lastValue > this.deadZone))
      this.emit("axisUp", axis, 1, value, lastValue, timestamp);
  }
}
module.exports=GamePadPlus;
