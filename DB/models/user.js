import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// encrypt password before send to db if not changed
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// if User exists use it otherwise create
export default mongoose.models.User || mongoose.model('User', userSchema)