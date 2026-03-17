import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
        },
        title: {
            type: String,
            default: 'New Chat',
            trim: true,
        },
    },
    { timestamps: true }
);

export const chatModel = mongoose.model('Chats', chatSchema);

