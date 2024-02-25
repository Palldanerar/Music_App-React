import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileAvatar: String,
    bio: String,
    createdPlaylists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist',
    }],
    uploadedSongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
    }]
});

const User = mongoose.model('User', userSchema);

export default User;