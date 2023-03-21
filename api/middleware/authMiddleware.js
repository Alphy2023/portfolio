
import User from './../models/userModel.js';
import Jwt from "jsonwebtoken";
import  expressAsyncHandler from 'express-async-handler';

// isauth middleware
export const isAuth = expressAsyncHandler(async (req, res, next) => {
    let token;
    const authorization = req?.headers?.authorization; 
    if(authorization){
       token = authorization.slice(7, authorization.length);
       try{
        if(token){
        // verify token
         const decoded=Jwt.verify(
                token,
                process.env.JWT_SECRET
        
            );
            const user = await User.findById(decoded?.id)
            req.user = user;
            next();
        }

       }catch(error){
            res.status(401).send({ message: 'Not authorized token expired! Please login.' });
       }

    }
    else{
        res.status(401).send({ message: 'Token missing!' });
    }
});

export const isAdmin = expressAsyncHandler(async(req,res,next)=>{
        const {role} = req.user;
        if(role !=='user'){
            next()
        }
        else{
            res.status(401).send({message:'Not Authorized. you are not an admin.'})
        }
})
