import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        console.log(file)

        if (file.fieldname == "playlistCover") {
            cb(null, "uploads/playlistCover");
        }

        if (file.fieldname == "songCover") {
            cb(null, "uploads/songCover");
        }

        if (file.fieldname == "songFile") {
            cb(null, "uploads/songFile");
        }

        if (file.fieldname == "profileAvatar") {
            cb(null, "uploads/profileAvatar");
        }
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage: storage })