// routes/addHealthcareProfessionalRoute.ts

import express from 'express';
import { addUserController,loginController, authController } from '../controllers/userController';
import authMiddleWare from "../middlewares/authMiddleWare"

const userRoute = express.Router();

// Route to add a new healthcare professional
userRoute.put('/', addUserController);

userRoute.post('/', loginController);

userRoute.post('/getUserData', authMiddleWare, authController);


export default userRoute;
