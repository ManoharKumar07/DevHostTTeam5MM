const express = require("express");
const app = express();
const Profile = require("./Models/ProfileModel");

const connectDB = require("./db/db");
const cors = require("cors");
const env = require("dotenv");
env.config();

connectDB();

app.use(cors());
app.use(express.json());

// Endpoint to create a new profile
app.post("/api/v1/user/profile", async (req, res) => {
  try {
    const profileData = req.body;

    // Create a new Profile instance with the incoming data
    const profile = new Profile(profileData);

    // Save the profile to the database
    await profile.save();

    res.status(201).json({ message: "Profile created successfully", profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Endpoint to fetch the most recently stored profile data
app.get("/api/v1/user/profile/data", async (req, res) => {
  try {
    // Query the database to find the most recently stored profile
    const profile = await Profile.findOne().sort({ _id: -1 }).limit(1);

    if (!profile) {
      return res.status(404).json({ message: "Profile data not found" });
    }
    console.log("data fetched");
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
