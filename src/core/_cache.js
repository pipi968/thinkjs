'use strict';

/**
 * global memory cache
 * @type {Object}
 */
global.thinkCache = (type, name, value) => {
  type = `_${type}`;
  if (!(type in thinkCache)) {
    thinkCache[type] = {};
  }
  // get cache
  if (name === undefined) {
    return thinkCache[type];
  }
  // get cache
  else if (value === undefined) {
    if (think.isString(name)) {
      return thinkCache[type][name];
    }
    thinkCache[type] = name;
    return;
  }
  //remove cache
  else if (value === null) {
    delete thinkCache[type][name];
    return;
  }
  //set cache
  thinkCache[type][name] = value;
};
/**
 * cache type
 * @type {String}
 */
/**
 * memory cache
 * @type {String}
 */
thinkCache.BASE = 'base';
/**
 * for store template file list
 * fast check template file is exist, no file io
 * @type {String}
 */
thinkCache.TEMPLATE = 'template';
/**
 * store controller/action template file
 * @type {String}
 */
thinkCache.VIEW = 'view';
/**
 * store db instance
 * @type {String}
 */
thinkCache.DB = 'db';
/**
 * store table fields
 * @type {String}
 */
thinkCache.TABLE = 'table';
/**
 * memory session
 * @type {String}
 */
thinkCache.SESSION = 'session';
/**
 * store redis instance
 * @type {String}
 */
thinkCache.REDIS = 'redis';
/**
 * store memcache instance
 * @type {String}
 */
thinkCache.MEMCACHE = 'memcache';