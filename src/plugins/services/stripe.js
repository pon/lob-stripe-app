'use strict';

exports.register = function (server, options, next) {
  var Stripe = require('stripe')(server.plugins.config.stripe_api_key);
  server.expose(Stripe);
  next();
};

exports.register.attributes = {
  name: 'stripe',
  version: '1.0.0'
};
