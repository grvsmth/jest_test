const webpack = require("webpack");
const path = require("path");

const build_dir = path.join(__dirname, "dist");
const app_dir = path.join(__dirname, "src");

const config = {
    "entry": path.join(app_dir, "index.js"),
    "output": {
        "path": build_dir,
        "filename": "index.bundle.js"
    },
    "mode": "development",
    "module": {
        "rules": [
            {
                "test": /\.js?/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};

module.exports = config;
