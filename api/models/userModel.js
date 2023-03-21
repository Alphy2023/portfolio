import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from "crypto"
// creating user schema
const userSchema = new mongoose.Schema(
    // user fields
    {
        firstname: { type: String, required: true},
        lastname: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        image: { type: String, required: false },
        password: { type: String, required: true },
        status:{type:Number, default:1, required:true},
        last_login:{type:Date, required:false},
        logout_at:{type:Date, required:false},
        online_status:{type:Number, default:0, required:false},
        mobile:{type:String, required:false,unique: true},
       
        passwordChangedAt:{type:Date},
        passwordResetToken:{type:String},
        passwordResetExpires:{type:Date},
    },
    // options
    {
        timestamps: true
    }
);

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next()
    }
    else{
        this.password= await bcrypt.hashSync(this.password)
    }
})
userSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 30*60*1000; // ten minutes
    return resetToken;
}
userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
// export the module
const User = mongoose.model('User', userSchema);
export default User;
// export default User;