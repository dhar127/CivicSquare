import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const formSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
      
    },
    mobileNumber: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Form = model('FormData', formSchema);

export default Form;
