const { Router } = require('express')
const router = Router()

const routerCountries = require('./routers/countriesRouter')
const routerActivities = require('./routers/activitiesRouter')

router.use('/countries', routerCountries)
router.use('/activities', routerActivities)

module.exports = router
