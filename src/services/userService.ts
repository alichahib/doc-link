import UserModel , { IUser } from '../models/User';

export async function addUser(user: IUser): Promise<IUser> {
  try {
    console.log(user)
    const newProfessional = await UserModel.create(user);
    console.log('µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ');
    return newProfessional;
  } catch (error) {
    console.log(error)
    throw new Error('Failed to add user');
  }
}
