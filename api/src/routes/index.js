const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//configurar mis middlewars
//router.use("/country", countryRoute) //  "/country" + "/", "/:name", "/:countryId/activity/:activityId"

module.exports = router;
