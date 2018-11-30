if (Device.deviceOS === "iOS") {
  module.exports = require('./answers-iOS');
} else if (Device.deviceOS === "Android") {
  module.exports = require('./answers-Android');
}
