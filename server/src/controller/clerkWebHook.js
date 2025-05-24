import User from '../models/User.model.js';
import { Webhook } from 'svix';

const clerkWebHooks = async (req, res) => {
    const whookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!whookSecret) {
        throw new Error("Missing Clerk Webhook Secret!");
    }

    try {
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature']
        };

        const payload = JSON.stringify(req.body);

        // Verify webhook signature
        const whook = new Webhook(whookSecret);
        whook.verify(payload, headers);

        const { data, type } = req.body;

        const userData = {
            email: data.email_addresses[0].email_address,
            username: `${data.first_name} ${data.last_name}`,
            image: data.image_url,
            role: data.public_metadata.role || 'user', // Default to 'user' if no role is provided
        };

        switch (type) {
            case 'user.created': {
                await User.create({ ...userData, _id: data.id });
                break;
            }
            case 'user.updated': {
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                break;
            }
            default:
                break;
        }

        res.json({ success: true, message: "Webhook processed successfully" });
    } catch (error) {
        console.error("Error at Clerk webhook:", error.message);
        res.status(400).json({ success: false, message: error.message });
    }
};

export default clerkWebHooks;
