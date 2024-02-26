import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    songCover: String,
    audioURL: {
        type: String,
    },
});

const Song = mongoose.model('Song', songSchema);

export default Song;