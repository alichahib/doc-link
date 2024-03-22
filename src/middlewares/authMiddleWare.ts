import dotenv from 'dotenv';

// Charge les variables d'environnement à partir du fichier .env
dotenv.config();
import JWT from 'jsonwebtoken';

const authMiddleWare = async (req:any,res:any,next:any) => {
    try{const jwtSecret: any = process.env.JWT_SECRET;

    const authorization = req.headers.authorization;
    const token= authorization.split(' ')[1];
    JWT.verify(token,jwtSecret,(error:any,decode:any)=>{
            if(error){
                return res.status(200).send({message:"Auth failed",success:false})
            }
            else{
                req.body.userId = decode.id
                next()
            }
    })
}catch(error){
console.log(error)
res.status(401).send({message:"not athorized",success:false})
}
};
export default authMiddleWare;