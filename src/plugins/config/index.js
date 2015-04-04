'use strict';

exports.register = function (server, options, next) {
  server.expose(require('./' + process.env.NODE_ENV + '.json'));
  next();
};

exports.register.attributes = {
  name: 'config',
  version: '1.0.0'
};
