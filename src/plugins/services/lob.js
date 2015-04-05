'use strict';

exports.register = function (server, options, next) {
  var Lob = require('lob')(server.plugins.config.lob_api_key);
  server.expose(Lob);
  next();
};

exports.register.attributes = {
  name: 'lob',
  version: '1.0.0'
};
