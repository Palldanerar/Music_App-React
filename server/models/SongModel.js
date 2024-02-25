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
    SongCover: String,
    audioURL: {
        type: String,
    },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;