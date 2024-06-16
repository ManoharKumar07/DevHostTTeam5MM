const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  // Education
  education: [
    {
      institution: { type: String },
      degree: { type: String },
      fieldOfStudy: { type: String },
      grade: { type: String },
      activitiesAndSocieties: { type: String },
    },
  ],

  // Skills
  skills: [
    {
      skillName: { type: String },
      proficiency: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      },
    },
  ],

  // Interests
  areasOfInterest: [{ type: String }],

  // Certifications and Courses
  certifications: [
    {
      title: { type: String },
      institution: { type: String },
      credentialID: { type: String },
      credentialURL: { type: String },
    },
  ],

  // Projects
  projects: [
    {
      title: { type: String },
      description: { type: String },
      technologiesUsed: [{ type: String }],
    },
  ],

  // Personalized Career Guidance Preferences
  careerPreferences: {
    preferredIndustries: [{ type: String }],
    preferredJobRoles: [{ type: String }],
    preferredLocations: [{ type: String }],

    salaryExpectation: { type: String },
    careerGoals: { type: String },
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
