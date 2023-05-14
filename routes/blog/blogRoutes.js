import express from 'express';
// import { TINY_KEY } from '../../config';

import {
    registerController, loginController, userController, refreshController,
} from '../../controllers';
import { auth } from '../../middlewares';

const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/whoami', auth, userController.whoami);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);
router.post('/createPost', )

export default router;
