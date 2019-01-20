const Gamepad = require("gamepad");
const EventEmitter = require('events');

class GamePadPlus extends EventEmitter {
  constructor(deadZone = 0.2) {
    super();
    this.deadZone = deadZone;
  }
  init() {
    Gamepad.init();
    Gamepad.on("attach", (id, state) => _onAttach(id, state));
    Gamepad.on("remove", (id) => _onRemove(id));
    Gamepad.on("down", (id, buttonId, timestamp) => this._onDown(id, buttonId, timestamp));
    Gamepad.on("up", (id, buttonId, timestamp) => this._onUp(id, buttonId, timestamp));
    Gamepad.on("move", (id, axis, value, lastValue, timestamp) => this._onMove(id, axis, value, lastValue, timestamp));
  }
  shutdown() {
    Gamepad.shutdown();
  }
  numDevices() {
    return (Gamepad.numDevices());
  }
  deviceAtIndex(deviceIndex) {
    return (Gamepad.deviceAtIndex(deviceIndex));
  }
  get detectDevices() {
    return (Gamepad.detectDevices);
  }
  get processEvents() {
    return (Gamepad.processEvents);
  }
  _onAttach(id, state) {
    this.emit("attach", id, state);
  }
  _onRemove(id) {
    this.emit("remove", id);
  }
  _onDown(id, buttonId, timestamp) {
    this.emit("down", id, buttonId, timestamp);
  }
  _onUp(id, buttonId, timestamp) {
    this.emit("up", id, buttonId, timestamp);
  }
  _onMove(id, axis, value, lastValue, timestamp) {
    this.emit("move", id, axis, value, lastValue, timestamp);
    if (value > this.deadZone && lastValue < this.deadZone) {
      this.emit("axisDown", id, axis, 1, value, lastValue, timestamp);
    } else if (value < -this.deadZone && lastValue > -this.deadZone) {
      this.emit("axisDown", id, axis, 0, value, lastValue, timestamp);
    } else if ((value > -this.deadZone && value < this.deadZone) && lastValue < -this.deadZone){
      this.emit("axisUp", id, axis, 0, value, lastValue, timestamp);
    } else if ((value > -this.deadZone && value < this.deadZone) && lastValue > this.deadZone){
      this.emit("axisUp", id, axis, 1, value, lastValue, timestamp);
    }
  }
}
module.exports = new GamePadPlus();
