module.exports = { 
    entry : "./scripts/index.js",

    output : { 
        path : __dirname + "/public",
        filename : "bundle.js"
    },
    mode : "development",
    watch : true
}