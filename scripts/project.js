var fs = require("fs");
var projectJSONPath = "/home/ubuntu/workspace/config/project.json";
var project = require(projectJSONPath);


if (!project.build.input.ios.plugins.firebaseios) {
    project.build.input.ios.plugins.firebaseios = {
        path: "plugins/iOS/firebaseios.zip",
        active: true,
        crashlytics: true
    };
}

if (!project.build.input.android.plugins.modules || !project.build.input.android.plugins.modules.firebaseandroid) {
    project.build.input.android.plugins.modules = project.build.input.android.plugins.modules ? project.build.input.android.plugins.modules : {};
    project.build.input.android.plugins.modules.firebaseandroid = {
        path: "plugins/Android/firebaseplugin",
        active: true
    };
}

var output = JSON.stringify(project, null, "\t");
fs.writeFileSync(projectJSONPath, output, "utf8");
