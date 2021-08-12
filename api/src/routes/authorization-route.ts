import * as express from "express";
const routeCallType = require('./../controllers/authorization-controller');

const router = express.Router();

// routeCallType is a function, any get requests to login will see if user exists. if not, go to create user page, then if so, loginpage
router.post('/', routeCallType);

module.exports = router;
