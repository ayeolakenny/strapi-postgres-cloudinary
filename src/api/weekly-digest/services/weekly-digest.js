'use strict';

/**
 * weekly-digest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekly-digest.weekly-digest');
