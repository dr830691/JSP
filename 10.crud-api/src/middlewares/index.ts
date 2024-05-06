// import express from 'express';
// import{ get,merge} from 'lodash';
// import { getUserBySessionToken } from '../db/users';
// // export const isOwner=async(req:)
// export const isAuthenticated=async (req:express.Request,res:express.Response,next:express.NextFunction)=>{
//     try{
//       const sessionToken=req.cookies['RAVINDAR-AUTH'];

//       if(!sessionToken){
//         return res.sendStatus(403);
//       }
//       const existingUser=await getUserBySessionToken(sessionToken);
//       if(!existingUser){
//         return res.sendStatus(403);
//       }
//       merge(req,{identity:existingUser});
//       return next();
//     } catch(error){
//         console.log(error);
//         return res.sendStatus(400);

//     }
// }

import express from 'express';
import { get, merge } from 'lodash';
import jwt from 'jsonwebtoken';
import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const token = req.cookies['RAVINDAR-AUTH'];
        console.log(token);

        if (!token) {
            return res.sendStatus(403);
        }

        // Verify JWT token
        jwt.verify(token, 'RAVINDAR-AUTH', async (err: any, decoded: any) => {
            if (err) {
                return res.sendStatus(403);
            }

            // Check if user exists in the database
            const existingUser = await getUserBySessionToken(decoded.sessionToken);
            if (!existingUser) {
                return res.sendStatus(403);
            }
            // Add user identity to request object
            merge(req, { identity: existingUser });
            // Call next middleware
            next();
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
