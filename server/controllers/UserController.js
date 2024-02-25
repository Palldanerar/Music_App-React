import User from "../models/UserModel.js"

export const register = async (req, res) => {
    try {

        console.log(1)
        console.log(req.body)

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!", user: newUser });

    } catch (err) {
        console.error("Error registering user: ", err);
        res.status(500).json({ message: "Registration failed" });
    };
};

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User Not Found!" });
        }

        if (!user.password == password) {
            return res.status(401).json({ message: "Inavalid Password!" });
        }

        res.status(200).json({ status: "success", user });

    } catch (err) {
        console.error("Error registering user: ", err);
        res.status(500).json({ message: "Registration failed" });
    };
};

export const profile = async (req, res) => {
    try {
        const _Id = req.user._id;

        const user = await User.findOne({ _id: _Id });

        if (!user) {
            res.status(404).json({ message: "User Not Found!!" });
        }

        res.status(200).json({ user });
    } catch (err) {
        console.error("Error Fetching Profile: ", err);
        res.status(500).json({ message: "Profile Retrieval Failed" });
    }
};

export const updateProfile = async (req, res) => {
    try {
      const { username, profilePicture, bio } = req.body;
      const userId = req.user._id;
  
      const user = await User.findOne({ _id: userId });
  
      if (!user) {
        res.status(404).json({ message: "User Not Found!" });
      }
  
      if (username) user.username = username;
      if (profilePicture) user.profilePicture = profilePicture;
      if (bio) user.bio = bio;
  
      await user.save();
  
      res.status(200).json({ message: "Profile Updated Successfully!", user });
    } catch (error) {
      console.error("Error Updating Profile: ", error);
      res.status(500).json({ message: "Profile Updation Failed!" });
    }
  };