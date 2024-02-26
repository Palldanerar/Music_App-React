import Song from "../models/SongModel.js"
import User from "../models/UserModel.js";

export const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find().populate('owner');
        res.status(200).json({ songs });
    } catch (error) {
        console.error('Error Fetching All The Songs: ', error);
        res.status(500).json({ message: "Error Fetching All The Songs" })
    }
}

export const getSongById = async (req, res) => {
    try {
        const songId = req.params.songId;

        const song = await Song.findOne({ songId }).populate('owner');

        if (!song) {
            return res.status(404).json({ song: [] });
        }
        res.status(200).json({ song });
    } catch (error) {
        console.error("Error Fetching Specific Songs by Name: ", error);
        res.status(500).json({ message: "Error Fetching Specific Songs by Name" });
    }
}

export const uploadSong = async (req, res) => {
    try {
        const { title, owner } = req.body;

        const songCover = req.files.songCover[0].path;
        const audioURL = req.files.songFile[0].path;

        const user = await User.findById(owner);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        if (!user.isVerified) {
            return res.status(404).json({ message: "User Not Verified" });
        }

        const newSong = new Song({
            title,
            owner,
            songCover,
            audioURL
        });

        await newSong.save();

        user.uploadedSongs.push(newSong._id);
        await user.save();

        res.status(201).json({ message: "Song Uploaded Successfully", song: newSong, user: user });
    } catch (error) {
        console.error("Error Uploading Data: ", error);
        res.status(500).json({ message: "Error Uploading Data" });
    }
}