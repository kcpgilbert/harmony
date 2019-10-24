const url = require('url');

/**
 * Returns the full string URL being accessed by a http.IncomingMessage, "req" object
 *
 * @param {http.IncomingMessage} req The incoming request whose URL should be gleaned
 * @param {boolean} includeQuery Include the query string in the returned URL (default: true)
 * @returns {string} The URL the incoming request is requesting
 */
function getRequestUrl(req, includeQuery = true) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl.split('?')[0],
    query: includeQuery ? req.query : null,
  });
}

module.exports = {
  getRequestUrl,
};
