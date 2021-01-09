'use strict';
var Mockgen = require('../mockgen.js');
var queries = require('../queries');
/**
 * Operations on /user/{userID}
 */
module.exports = {
    /**
     * summary: 
     * description: Get a User Profile by ID
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: userGET
     */
    get: {
        200: function (req, res, callback) {
            const query = {
                name: 'SELECT_USER_PROFILE_BY_ID',
                text: queries.SELECT_USER_PROFILE_BY_ID,
                values: [req.params.userID]
            }

            req.sql.connect().catch(err => console.error('connection error', err.stack))
            req.sql.query(query)
                .then(result => {console.log(result.rows); callback(null, JSON.stringify(result.rows))})
                .catch(e => {console.error(e.stack); callback(e)})
                .finally(() => req.sql.end())
 
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by factual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Declares and creates a new profile
     * parameters: _profile
     * produces: 
     * responses: 201, default
     * operationId: userPOST
     */
    post: {
        201: function (req, res, callback) {
            var user = req.body;
            var id = req.params.userID;
            var firstName = user.FirstName;
            var lastName = user.LastName;
            var userId = user.UserId;
            var profilePictureUri = user.ProfilePictureUri;
            var rating = user.Rating;
            var ranking = user.Ranking;
            var totalDistance = user.TotalDistance;
            var totalTrips = user.TotalTrips;
            var totalTime = user.TotalTime;
            var hardStops = user.HardStops;
            var hardAccelerations = user.HardAccelerations;
            var fuelConsumption = user.FuelConsumption;
            var maxSpeed = user.MaxSpeed;

            console.log("firstName:" + firstName)

            const query = {
                name: 'INSERT_USER_PROFILE',
                text: queries.INSERT_USER_PROFILE,
                values: [id, firstName, lastName, userId, profilePictureUri, rating, ranking, totalDistance, totalTrips, totalTime, hardStops, hardAccelerations, fuelConsumption, maxSpeed]
            }

            req.sql.connect().catch(err => console.error('connection error', err.stack))
            req.sql.query(query)
                .then(result => {console.log(result.rows); callback(null, JSON.stringify(result.rows[0]))})
                .catch(e => {console.error(e.stack); callback(e)})
                .finally(() => req.sql.end())
        },
        
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Update User
     * parameters: 
     * produces: 
     * responses: 200, 404, default
     * operationId: updateUser
     */
    patch: {
        200: function(req, res, callback) {
            var user = req.body;
            var firstName = user.FirstName;
            var lastName = user.LastName;
            var userId = user.UserId;
            var profilePictureUri = user.ProfilePictureUri;
            var rating = user.Rating;
            var ranking = user.Ranking;
            var totalDistance = user.TotalDistance;
            var totalTrips = user.TotalTrips;
            var totalTime = user.TotalTime;
            var hardStops = user.HardStops;
            var hardAccelerations = user.HardAccelerations;
            var fuelConsumption = user.FuelConsumption;
            var maxSpeed = user.MaxSpeed; 
            var deleted = user.Deleted;
            var id = req.params.userID;
            user.Id = req.params.userID; 
           
            const query = {
                name: 'UPDATE_USER_PROFILE',
                text: queries.UPDATE_USER_PROFILE,
                values: [id, firstName, lastName, userId, profilePictureUri, rating, ranking, totalDistance, totalTrips, totalTime, hardStops, hardAccelerations, fuelConsumption, maxSpeed, deleted]
            }

            req.sql.connect().catch(err => console.error('connection error', err.stack))
            req.sql.query(query)
                .then(result => {console.log(result.rows); callback(null, JSON.stringify(result.rows[0]))})
                .catch(e => {console.error(e.stack); callback(e)})
                .finally(() => req.sql.end())           
        },
/*         200: function (req, res, callback) {
 
            var user = req.body;
            user.Id = req.params.userID;
            req.sql(queries.UPDATE_USER_PROFILE)
                .param('UserProfileJson', JSON.stringify(user), TYPES.VarChar)
                .param('user_profile_id', req.params.userID, TYPES.NVarChar)
                .exec(res);
            callback;
            
        }, */
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'patch',
                response: '404'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'patch',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Delete User By ID
     * parameters: 
     * produces: 
     * responses: 204, 404, default
     * operationId: userDELETE
     */
    delete: {
        204: function (req, res, callback) {
            const query = {
                name: 'DELETE_USER_PROFILE',
                text: queries.DELETE_USER_PROFILE,
                values: [req.params.userID]
            }

            req.sql.connect().catch(err => console.error('connection error', err.stack))
            req.sql.query(query)
                .then(result => {console.log(result.rows); callback(null, JSON.stringify(result.rows))})
                .catch(e => {console.error(e.stack); callback(e)})
                .finally(() => req.sql.end())
 
        },        
/*         204: function (req, res, callback) {
            var tempmessage = '';
            var resmessage = tempmessage.concat('User profile ',req.params.userID,' deleted');
            req.sql(queries.DELETE_USER_PROFILE)
                .param('user_profile_id', req.params.userID, TYPES.NVarChar)
                .into(res, resmessage);
            callback;

        }, */
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'delete',
                response: '404'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
