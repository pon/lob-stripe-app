'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();

server.register([
  require('./plugins/services/config')
], function (err) {
  if (err) {
    throw err;
  }
});

server.connection({
    port: server.plugins.config.port,
    labels: ['http']
});

server.views({
  engines: {
    hbs: require('handlebars')
  },
  path: __dirname + '/views',
  layoutPath: __dirname + '/views/layouts',
  layout: 'defaultLayout',
  partialsPath: __dirname + '/views/partials'
});

server.start();
console.log('Server Started on:', server.info.uri);
