const { Router } = require('express')

const postActivities = require('../../handlers/activityHandlers/postActivities')
const getActivities = require('../../handlers/activityHandlers/getActivities')

const routerActivities = Router()

routerActivities.post('/', postActivities)

routerActivities.get('/', getActivities)

module.exports = routerActivities
