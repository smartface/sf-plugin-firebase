if (Device.deviceOS === "iOS") {
  module.exports = require('./crashlytics-iOS');
} else if (Device.deviceOS === "Android") {
  module.exports = require('./crashlytics-Android');
}
