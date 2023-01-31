const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const characterRoute = require('./characters')
const episodesRoute = require('./episodes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/characters', characterRoute);
router.use('/episodes', episodesRoute);

//configurar mis middlewars
//router.use("/country", countryRoute) //  "/country" + "/", "/:name", "/:countryId/activity/:activityId"

module.exports = router;
