'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();

server.register([
  require('./plugins/services/config'),
  require('./plugins/services/lob'),
  require('./plugins/services/stripe')
], function (err) {
  if (err) {
    throw err;
  }
});

console.log(server.plugins.stripe);
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
