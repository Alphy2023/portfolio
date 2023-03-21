import Jwt from "jsonwebtoken";
export function generateToken(id) {
    // call sign function
    return Jwt.sign({id},
        process.env.JWT_SECRET, {
        expiresIn: '5d',
    });
};

