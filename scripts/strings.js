var fs = require("fs");
var path = require("path");
var androidConfigPath = path.normalize("/home/ubuntu/workspace/assets/google-services.json");
var xmlPath = path.normalize("/home/ubuntu/workspace/config/Android/strings.xml");
var fileExists = fs.statSync(androidConfigPath);

if (!fileExists) {
    console.error("File not found at: " + androidConfigPath);
    return;
}

var androidConfig = require(androidConfigPath);
var output = "<resources>\n" +
    '    <string name="google_app_id" translatable="false">' + androidConfig.client[0].client_info.mobilesdk_app_id + '</string>\n' +
    '    <string name="gcm_defaultSenderId" translatable="false">' + androidConfig.project_info.project_number + '</string>\n' +
    '    <string name="default_web_client_id" translatable="false">' + androidConfig.client[0].oauth_client[0].client_id + '</string>\n' +
    '    <string name="firebase_database_url" translatable="false">' + androidConfig.project_info.firebase_url + '</string>\n' +
    '    <string name="google_api_key" translatable="false">' + androidConfig.client[0].api_key[0].current_key + '</string>\n' +
    '</resources>';

fs.writeFileSync(xmlPath, output, "utf8");