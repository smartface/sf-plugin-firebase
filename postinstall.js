const fs = require('fs');
const https = require('https');
const path = require('path');
const rimraf = require('./rimraf');

const PROJECT_ROOT_RELATIVE_PATH = '../../../..';
const FIREBASE_URL = 'https://cd.smartface.io/repository/smartfacefirebase/ios/3.0.4/firebaseios.zip';

async function getIOSFirebasePlugin() {
    const projectPluginPath = path.normalize(path.join(__dirname, `${PROJECT_ROOT_RELATIVE_PATH}/plugins/iOS/firebaseios.zip`));
    return new Promise((resolve, reject) => {
        https.get(FIREBASE_URL, (res) => {
            const filePath = fs.createWriteStream(projectPluginPath);
            res.pipe(filePath);
            filePath.on('finish', () => {
                filePath.close();
                resolve();
            });
            filePath.on('error', (err) => reject(err));
        });
    });
}

async function getAndroidFirebasePlugin() {
    const androidFirebasePath = path.normalize(path.join(__dirname, 'Native/Android/firebaseplugin'));
    const projectPluginPath = path.normalize(path.join(__dirname, `${PROJECT_ROOT_RELATIVE_PATH}/plugins/Android/firebaseplugin`));
    rimraf.sync(projectPluginPath, { recursive: true, force: true, disableGlob: true });
    return new Promise((resolve, reject) => {
        fs.rename(androidFirebasePath, projectPluginPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

function addDefaultConfigToProjectJSON() {
    const projectJSONPath = path.normalize(path.join(__dirname, `${PROJECT_ROOT_RELATIVE_PATH}/config/project.json`));
    const project = require(projectJSONPath);
    if (!project.build.input.ios.plugins.firebaseios) {
        project.build.input.ios.plugins.firebaseios = {
            path: 'plugins/iOS/firebaseios.zip',
            active: true,
            crashlytics: true
        };
    }
    if (!project.build.input.android.plugins.modules || !project.build.input.android.plugins.modules.firebaseandroid) {
        project.build.input.android.plugins.modules = project.build.input.android.plugins.modules
            ? project.build.input.android.plugins.modules
            : {};
        project.build.input.android.plugins.modules.firebaseplugin = {
            path: 'plugins/Android/firebaseplugin',
            active: true
        };
    }

    const output = JSON.stringify(project, null, '\t');
    fs.writeFileSync(projectJSONPath, output, 'utf8');
}

function deleteRemainders() {
    const nativePath = path.normalize(path.join(__dirname, 'Native'));
    rimraf.sync(nativePath, { recursive: true, force: true, disableGlob: true });
}

function isSmartfaceProject() {
    const projectJSONPath = path.normalize(path.join(__dirname, `${PROJECT_ROOT_RELATIVE_PATH}/config/project.json`));
    return fs.existsSync(projectJSONPath);
}

function isAppcircleBuild() {
    return !!process.env.AC_APPCIRCLE;
}

/**
 * This check is here to enable installation on development environment.
 * If we are not building or in smartface environment, don't try to get plugins.
 */
if (!isAppcircleBuild() || !isSmartfaceProject()) {
    return;
}
Promise.all([getAndroidFirebasePlugin(), getIOSFirebasePlugin()])
    .then(() => {
        addDefaultConfigToProjectJSON();
        deleteRemainders();
    })
    .catch((err) => {
        console.error('An error occurred : ', err);
        process.exit(1);
    });
