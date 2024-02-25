import express from 'express';
import { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'; // Import dotenv/config for loading environment variables

const app = express();
import form from './modals/new.modal.js';

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
const url = process.env.ATLAS_URL;

const connectToDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
        app.listen(8007, () => {
            console.log("App running on port 8005", form);
        });
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

connectToDB();

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection established");
});

app.post('/api/form', async (req, res) => {
    try {
        const { name, aadharNumber, mobileNumber, otp } = req.body;

        // Check if required fields are missing or empty
        if (!name || !aadharNumber || !mobileNumber || !otp) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new instance of the Form model with the request body data
        const formData = new form({ name, aadharNumber, mobileNumber, otp });

        // Save the new form data to the database
        await formData.save();

        // Respond with a success message
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        // If an error occurs during data saving, log the error and respond with an error message
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Failed to save form data' });
    }
});
