'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();

server.register([
  require('./plugins/config')
], function (err) {
  if (err) {
    throw err;
  }
});

server.connection({
    port: server.plugins.config.port,
    labels: ['http']
});

server.start();
console.log('Server Started on:', server.info.uri);
