"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generatePath_1 = require("@site/src/components/shared-libs/generatePath");
// Here a workaround for Docusaurus, as your assets are public at the end, require them
function LocalFileResolver(basePath) {
    if (basePath === void 0) { basePath = ""; }
    return {
        resolve: function (ref) {
            return new Promise(function (resolve, reject) {
                var temp_url = (0, generatePath_1.default)(ref, basePath);
                //import("@site/static/schemas/examples/array/additionalItems1.json")

                console.log(temp_url)
                var defs = require("@site/static/".concat(temp_url));
                console.log(defs)
                console.log("@site/static/".concat(temp_url.substring(1)))

                Promise.resolve().then(function () { return require("@site/static/".concat(temp_url)); }).then(function (result) { return resolve(result)})
                    .catch(function (err) { return reject(err); });
            });
        },
    };
}
exports.default = LocalFileResolver;
