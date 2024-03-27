// routes/addHealthcareProfessionalRoute.ts

import express from 'express';
import { addUserController,loginController, authController, addDoctorRequestController,searchDoctorController, getDoctorByEmailController } from '../controllers/userController';
import authMiddleWare from "../middlewares/authMiddleWare"

const userRoute = express.Router();

// Route to add a new healthcare professional
userRoute.put('/', addUserController);

userRoute.post('/', loginController);

userRoute.post('/getUserData', authMiddleWare, authController);
userRoute.post('/apply-doctor', addDoctorRequestController);
userRoute.post('/search-doctor', searchDoctorController);
userRoute.post('/get-doctor', getDoctorByEmailController);


export default userRoute;
