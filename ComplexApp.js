/*
 * Filename: ComplexApp.js
 * Content: A complex and sophisticated JavaScript application for managing a network of interconnected devices.
 * Author: John Doe
 */

// Import necessary modules
import { Device } from "./Device.js";
import { Network } from "./Network.js";
import { Sensor } from "./Sensor.js";
import { Actuator } from "./Actuator.js";

// Create an array of devices
const devices = [
  new Sensor("Sensor001", "Temperature Sensor", "Living Room", "Temperature"),
  new Actuator("Actuator001", "Light Actuator", "Kitchen", "Light"),
  new Sensor("Sensor002", "Humidity Sensor", "Bedroom", "Humidity"),
  new Actuator("Actuator002", "Blind Actuator", "Living Room", "Blinds"),
  // Add more devices here...
];

// Create a network and add devices to it
const network = new Network("Home Network");
network.addDevice(devices[0]);
network.addDevice(devices[1]);
network.addDevice(devices[2]);
network.addDevice(devices[3]);
// Add more devices to the network...

// Connect devices in the network
network.connectDevices(devices[0], devices[1]);
network.connectDevices(devices[1], devices[2]);
network.connectDevices(devices[2], devices[3]);
// Connect more devices in the network...

// Perform operations on devices
devices[0].readValue(); // Read temperature from Sensor001
devices[1].toggleState(); // Toggle light state of Actuator001
devices[2].readValue(); // Read humidity from Sensor002
devices[3].toggleState(); // Toggle blinds state of Actuator002
// Perform more operations on devices...

// Print network information
console.log(network.getDeviceCount());  // Output: 4
console.log(network.getConnectedDevices(devices[0]));  // Output: [Sensor001, Light Actuator]
console.log(network.getConnectedDevices(devices[2]));  // Output: [Temperature Sensor, Blind Actuator]

// Exporting modules
export { devices, network };