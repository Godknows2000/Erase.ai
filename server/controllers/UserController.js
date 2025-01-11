import {Webhook} from 'svix'
import userModel from '../models/userModel.js'

// API Controller Function to Manage Clerk User with database
// http://localhost:400/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Verify the webhook
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        // Acknowledge the webhook quickly
        res.status(200).json({ success: true });

        // Process data asynchronously
        const { data, type } = req.body;

        switch (type) {
            case 'user.created':
                await userModel.create({
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
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


export {clerkWebhooks}