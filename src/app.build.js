({
    mainConfigFile: "main.js",
    optimize: "uglify2",
    baseUrl: '.',
    name: './almond',
    include: ['main'],
    insertRequire: ['main'],
    out: "../dist/mathjax-lazyload.js",
    wrap: true

})