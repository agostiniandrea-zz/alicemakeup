var path = require('path');

module.exports = {
    Api: path.resolve(__dirname + '/src/api/index.js'),
    AppConfig: path.resolve(__dirname + '/src/appConfig/configuration.json'),
    ColorVariables: path.resolve(__dirname + './src/appConfig/ColorVariables.scss'),
    Components: path.resolve(__dirname + '/src/app/React/components/'),
    Containers: path.resolve(__dirname + '/src/app/Redux/containers/'),
    Modules: path.resolve(__dirname + '/src/app/Redux/modules/'),
    Pages: path.resolve(__dirname + '/src/app/React/page/'),
    Routes: path.resolve(__dirname + '/src/app/routes/'),
    Store: path.resolve(__dirname + '/src/app/Redux/store.js'),
    Utilities: path.resolve(__dirname + '/src/app/utility/index.js'),
    Variables: path.resolve(__dirname + './src/scss/Variables.scss'),
};