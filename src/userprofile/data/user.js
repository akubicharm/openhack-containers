'use strict';
var Mockgen = require('./mockgen.js');
var queries = require('./queries');
/**
 * Operations on /user
 */
module.exports = {
    /**
     * summary: 
     * description: List all user profiles
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: getAllUsers
     */
    get: {
        200: function (req, res, callback) {
            const query = {
                name: 'SELECT_USER_PROFILES',
                text: 'select * FROM UserProfiles'
            }

            req.sql.connect().catch(err => console.error('connection error', err.stack))
            req.sql.query(query)
                //.then(result => callback(JSON.stringify(result.rows)))
                .then(result => {console.log(JSON.stringify(result.rows)); callback(null, JSON.stringify(result.rows))})
                .catch(e => {console.error(e.stack); callback(e)})
                .finally(() => req.sql.end())

        },
        default: function (req, res, callback) {

            Mockgen().responses({
                path: '/user',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
