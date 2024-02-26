import Playlist from "../models/PlaylistModel.js"
import User from "../models/UserModel.js";
import Song from "../models/SongModel.js";

export const createPlaylist = async (req, res) => {
    try {
        const { title, userId } = req.body;
        const playlistCover = req.file.path;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const newPlaylist = new Playlist({
            title,
            creator: userId,
            playlistCover,
        });

        await newPlaylist.save();

        user.createdPlaylists.push(newPlaylist._id);
        await user.save();

        res.status(201).json(newPlaylist);
    } catch (error) {
        console.error("Error Creating Playlist: ", error);
        res.status(500).json({ message: "Error Creating Playlist" });
    }
}

export const getPlaylistById = async (req, res) => {
    try {

        const _Id = req.params.playlistId;

        const playlist = await Playlist.findOne({ _id: _Id }).populate('songs');

        res.status(201).json(playlist);

    } catch (error) {
        console.error("Error Getting Playlist: ", error);
        res.status(500).json({ message: "Error Getting Playlist" });
    }
}

export const addSongToPlaylist = async (req, res) => {
    try {
        const { songId } = req.body;
        console.log(req.body)
        const playlistId = req.params.playlistId;

        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: "Playlist Not Found" });
        }

        const song = await Song.findById(songId);

        if (!song) {
            return res.status(404).json({ message: "Song Not Found" });
        }

        const songExistsInPlaylist = playlist.songs.some((playlistSong) =>
            playlistSong.equals(song._id)
        );

        if (songExistsInPlaylist) {
            return res.status(400).json({ message: "Song already exists in the playlist" });
        }

        playlist.songs.push(song);
        await playlist.save();
        res.status(200).json(playlist);
    } catch (error) {
        console.error("Error Adding Songs To The Playlist: ", error);
        res.status(500).json({ message: "Error Adding Songs To The Playlist" });
    }
}