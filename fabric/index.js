if (Device.deviceOS === "iOS") {
  module.exports = require('./fabric-iOS');
} else if (Device.deviceOS === "Android") {
  module.exports = require('./fabric-Android');
}