import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name : String,
  email : { type: String, unique: true},
  phone : String,
  password : String,
  role : { type: String, enum:['customer', 'seller', 'admin'],
    default: 'customer'
  },
  adress: [string],
  kycDocuments: string,
}, { timestamps: true});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model('User', userSchema);