import dotenv from 'dotenv';
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
import { Request, Response } from 'express';
import { addUser } from '../services/userService';
import UserModel from '../models/User';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';



export async function addUserController(req: Request, res: Response): Promise<void> {
  try {
    const existingUser = await UserModel.findOne({email:req.body.email});

    if(existingUser){
      res.status(200).send({message:"existing user"});
    }
    else{
      const password = req.body.password;
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password,salt)
      console.log(hashPassword)
      req.body.password = hashPassword;
      const newUser = new UserModel(req.body);
      await addUser(newUser);
      res.status(201).json(newUser);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add healthcare professional' });
  }
}

export async function authController(req: Request, res: Response): Promise<void> {
  try {
    const user = await UserModel.findOne({_id:req.body.userId});

    if(!user){
      res.status(200).send({message:"not existing user",success:false});
    }
    else{
res.status(200).send({success:true,data:{
  userName:user.userName,
  email:user.email
}})
     

    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add healthcare professional' });
  }
}

export async function loginController(req: Request, res: Response): Promise<void> {
  try {
    console.log(jwtSecret)
    const user = await UserModel.findOne({userName:req.body.userName});

    if(!user){
      res.status(200).send({message:"not existing user",success:false});
    }
    else{
      const password = req.body.password;
      const isMatch = await bcryptjs.compare(password,user.password)

      if(!isMatch){
        res.status(200).send({message:"invalid email or password",success:false}); 
      }
      else{
        const token = jwt.sign({id:user._id},jwtSecret as string,{expiresIn:'1d',algorithm: "HS256"})
        res.status(200).send({message:"Login success",success:true,token}); 
      }
     

    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to add healthcare professional' });
  }
}
