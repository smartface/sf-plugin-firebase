if (Device.deviceOS === "iOS") {
  module.exports = require('./firebaseCrashlytics-iOS');
} else if (Device.deviceOS === "Android") {
  module.exports = require('./firebaseCrashlytics-Android');
}
