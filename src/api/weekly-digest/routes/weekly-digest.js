'use strict';

/**
 * weekly-digest router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::weekly-digest.weekly-digest');
