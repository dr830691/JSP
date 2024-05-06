
import express from 'express';
// import { register } from 'controllers/authentication'; // Assuming 'register' is exported from the authentication controller
import authentication from './authentication';
import users from './users';
const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    return router;
}
