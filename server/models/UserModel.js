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
    isVerified: {
        type: Boolean,
        require: true,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
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
    }],
    favoritesSongs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
    }]
});

const User = mongoose.model('User', userSchema);

export default User;