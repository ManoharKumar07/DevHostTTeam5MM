import React, { useState } from "react";

const Profile = () => {
  // State variables to store form data
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [areasOfInterest, setAreasOfInterest] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [careerPreferences, setCareerPreferences] = useState({
    preferredIndustries: [],
    preferredJobRoles: [],
    preferredLocations: [],
    workEnvironment: "",
    salaryExpectation: "",
    careerGoals: "",
  });

  // Handler functions to update state
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleSkillsChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleAreasOfInterestChange = (index, value) => {
    const updatedAreasOfInterest = [...areasOfInterest];
    updatedAreasOfInterest[index] = value;
    setAreasOfInterest(updatedAreasOfInterest);
  };

  const handleCertificationsChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const handleProjectsChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleCareerPreferencesChange = (field, value) => {
    setCareerPreferences((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const profileData = {
      education,
      skills,
      areasOfInterest,
      certifications,
      projects,
      careerPreferences,
    };

    fetch("http://localhost:8080/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, you can redirect or show a success message here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, show error message, etc.
      });
  };

  return (
    <div className=" w-full bg-gradient-to-t from-black to-gray-900 text-black py-6">
      <div className="w-[50rem] mx-auto py-8 ">
        <h2 className="text-2xl font-bold mb-4">Profile Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Education */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Education</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
              onClick={() => setEducation([...education, {}])}
            >
              Add Education
            </button>
            {education.map((edu, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution || ""}
                  onChange={(e) =>
                    handleEducationChange(index, "institution", e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree || ""}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
                {/* Add more fields for grade, fieldOfStudy, activitiesAndSocieties */}
              </div>
            ))}
          </div>
          {/* Skills */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Skills</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
              onClick={() => setSkills([...skills, {}])}
            >
              Add Skill
            </button>
            {skills.map((skill, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  placeholder="Skill Name"
                  value={skill.skillName || ""}
                  onChange={(e) =>
                    handleSkillsChange(index, "skillName", e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
                {/* Add dropdown for proficiency */}
              </div>
            ))}
          </div>
          {/* Areas of Interest */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Areas of Interest</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
              onClick={() => setAreasOfInterest([...areasOfInterest, ""])}
            >
              Add Area of Interest
            </button>
            {areasOfInterest.map((interest, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  placeholder="Area of Interest"
                  value={interest || ""}
                  onChange={(e) =>
                    handleAreasOfInterestChange(index, e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
              </div>
            ))}
          </div>
          {/* Certifications */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Certifications</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
              onClick={() => setCertifications([...certifications, {}])}
            >
              Add Certification
            </button>
            {certifications.map((cert, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={cert.title || ""}
                  onChange={(e) =>
                    handleCertificationsChange(index, "title", e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
                {/* Add more fields for institution, credentialID, credentialURL */}
              </div>
            ))}
          </div>
          {/* Projects */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Projects</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
              onClick={() => setProjects([...projects, {}])}
            >
              Add Project
            </button>
            {projects.map((project, index) => (
              <div key={index} className="mt-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={project.title || ""}
                  onChange={(e) =>
                    handleProjectsChange(index, "title", e.target.value)
                  }
                  className="border rounded px-2 py-1 mr-2"
                />
                {/* Add more fields for description, technologiesUsed */}
              </div>
            ))}
          </div>
          {/* Career Preferences */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Career Preferences</h3>
            <input
              type="text"
              placeholder="Preferred Industries"
              value={careerPreferences.preferredIndustries.join(", ")}
              onChange={(e) =>
                handleCareerPreferencesChange(
                  "preferredIndustries",
                  e.target.value.split(",").map((item) => item.trim())
                )
              }
              className="border rounded px-2 py-1 mb-2 block w-full"
            />
            {/* Add inputs for other fields like preferredJobRoles, preferredLocations, workEnvironment, salaryExpectation, careerGoals */}
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
