import {Webhook} from 'svix'
import userModel from '../models/userModel.js'

// API Controller Function to Manage Clerk User with database
// http://localhost:400/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);

        const SECRET_KEY = process.env.SECRET_KEY;

        if (!SECRET_KEY) {
            throw new Error("CLERK_WEBHOOK_SECRET is not defined. Please set the environment variable.");
        }

        console.log('Start now....')
        console.log('CLERK_WEBHOOK_SECRET:', SECRET_KEY);

        const whook = new Webhook(SECRET_KEY);

        // Verify the webhook signature
        const payload = req.body;
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        const verifiedPayload = whook.verify(JSON.stringify(payload), headers);

        res.status(200).json({ success: true });

        // Process the verified data
        const { data, type } = verifiedPayload;

        // Acknowledge the webhook quickly
        // res.status(200).json({ success: true });

        // // Process data asynchronously
        // const { data, type } = req.body;

        switch (type) {
            case 'user.created':
                console.log('Attempting to create user:', data.id);
                await userModel.create({
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                    creditBalance: 5,
                });
                console.log('User Created');
                break;

            case 'user.updated':
                await userModel.findOneAndUpdate(
                    { clerkId: data.id },
                    {
                        email: data.email_addresses[0].email_address,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        photo: data.image_url,
                    }
                );
                console.log('User Updated');
                break;

            case 'user.deleted':
                await userModel.findOneAndDelete({ clerkId: data.id });
                console.log('User Deleted');
                break;

            default:
                console.log('Unknown Event');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const userCredits = async (req, res) => {
    try {
        const clerkId = req.body.clerkId;

        console.log('Fetching user credits for clerkId:', clerkId);

        const userData = await userModel.findOne({ clerkId });

        console.log("User data here:",userData);

        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, creditBalance: userData.creditBalance });

    } catch (error) {
        console.error('Error fetching user credits:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export {clerkWebhooks, userCredits}