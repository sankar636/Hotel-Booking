// import User from '../models/User.model.js';
// import { Webhook } from 'svix';

// /**
//  * Clerk Webhook Controller
//  * Handles: user.created, user.updated, user.deleted
//  */
// const clerkWebHook = async (req, res) => {
//     console.log("📩 Start processing Clerk webhook");
//     console.log("Headers:", req.headers); // Log headers for debugging

//     try {
//         const whookSecret = process.env.CLERK_WEBHOOK_SECRET;
//         if (!whookSecret) throw new Error("Missing Clerk Webhook Secret!");

//         const headers = {
//             'svix-id': req.headers['svix-id'],
//             'svix-timestamp': req.headers['svix-timestamp'],
//             'svix-signature': req.headers['svix-signature']
//         };

//         // Validate all required headers
//         if (!headers['svix-id'] || !headers['svix-timestamp'] || !headers['svix-signature']) {
//             return res.status(400).json({ success: false, message: "Missing required webhook headers" });
//         }

//         const payload = req.body.toString(); // raw body buffer
//         const whook = new Webhook(whookSecret);

//         const evt = whook.verify(payload, headers); // Verifies and parses JSON
//         const { data, type } = evt;

//         console.log(`📨 Clerk Event Type: ${type}`);
//         console.log("👤 Event Data:", data);

//         // Common user data
//         const userData = {
//             email: data.email_addresses?.[0]?.email_address || '',
//             username: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
//             image: data.image_url,
//             role: data.public_metadata?.role || 'user', // Default role is 'user'
//         };

//         switch (type) {
//             case 'user.created':
//                 await User.create({ ...userData, _id: data.id }); // Ensure _id is a string
//                 console.log("✅ User created:", data.id);
//                 break;

//             case 'user.updated':
//                 await User.findByIdAndUpdate(String(data.id), userData); // Ensure _id is a string
//                 console.log("🔄 User updated:", data.id);
//                 break;

//             case 'user.deleted':
//                 await User.findByIdAndDelete(String(data.id)); // Ensure _id is a string
//                 console.log("❌ User deleted:", data.id);
//                 break;

//             default:
//                 console.log("⚠️ Unhandled event type:", type);
//         }

//         return res.status(200).json({ success: true, message: "Webhook processed successfully" });

//     } catch (error) {
//         console.error("🚨 Webhook Error:", error.message);
//         return res.status(400).json({ success: false, message: error.message });
//     }
// };

// export default clerkWebHook;
