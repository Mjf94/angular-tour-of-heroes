/**
 * Created by mikema on 10/5/17.
 */
module.exports = {
  port: 3100,
  server: {
    baseDir: "src",
    routes: {
      "/node_modules": "node_modules"
    },
    middleware: {
      // overrides the fallback middleware to use index-aot
      1: require('connect-history-api-fallback')({ index: '/index-aot.html' })
    }
  }
};
