import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name muust contain at least 3 character"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name muust contain at least 3 character"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be contain exact 10 Digits"],
    maxLength: [10, "Phone number must be contain exact 10 Digits"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message must contain at least 10 characters"],
  },
});
export const Message=mongoose.model("Message",messageSchema);
