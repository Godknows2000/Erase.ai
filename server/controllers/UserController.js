import {Webhook} from 'svix'
import userModel from '../models/userModel.js'

// API Controller Function to Manage Clerk User with database
// http://localhost:400/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try{

        const wHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await wHook.verify(JSON.stringify(res.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const {data, type} = req.body

        switch (type) {
            case 'user.created': {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData)
                res.json({})
                console.log('User Created')
                break;
            }
            case 'user.updated':{
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({clerkId: data.id},userData)
                res.json({})
                console.log('User Updated')
                break;
            }

            case 'user.deleted': {
                await userModel.findOneAndDelete({clerkId: data.id})
                res.json({})

                console.log('User Deleted')
                break;
            }
            default:
                console.log('Unknown Event')
                break;
        }

    } catch (error) {

        console.log(error.message)

        res.json({success: false, message: error.message})

    }
}

export {clerkWebhooks}