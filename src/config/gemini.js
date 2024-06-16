import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";

// Paste Your API KEY Below
const API_KEY = "AIzaSyA9pXNSmTvMxL0TwmePG_yTFPKvkkCFVhI";

async function runChat(userPrompt) {
  try {
    // Fetch user profile data from your API
    const profileResponse = await fetch(
      "http://localhost:8080/api/v1/user/profile/data"
    );
    if (!profileResponse.ok) {
      throw new Error("Failed to fetch profile data");
    }
    const profileData = await profileResponse.json();

    // Construct personalized prompt with user's profile data
    const customPrompt =
      `Here's your personalized career and educational guide:\n\n` +
      `Education:\n${formatEducation(profileData.education)}\n\n` +
      `Skills:\n${formatSkills(profileData.skills)}\n\n` +
      `Areas of Interest:\n${formatAreasOfInterest(
        profileData.areasOfInterest
      )}\n\n` +
      `Certifications:\n${formatCertifications(
        profileData.certifications
      )}\n\n` +
      `Projects:\n${formatProjects(profileData.projects)}\n\n` +
      `Career Preferences:\n${formatCareerPreferences(
        profileData.careerPreferences
      )}\n\n`;

    // Concatenate the custom prompt with the user's prompt
    const fullPrompt =
      userPrompt +
      "\n\n" +
      customPrompt +
      " give brief suggestionadditionally provide what are other technology i can learn easily and use the data provided while answering the question . ";

    // Disable any animation or loading indicator here (not directly controllable)
    // Since the library may show it automatically, manage UI state in your app

    // Log the fullPrompt before sending it to the model
    console.log("Full Prompt:\n", fullPrompt);

    // Initialize the Google Generative AI
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.75,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // Start a chat session with the model
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    // Send the concatenated prompt to the model
    const result = await chat.sendMessage(fullPrompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error in runChat:", error);
    return "Apologies, but I encountered an issue while providing personalized guidance.";
  }
}

// Helper functions to format profile data (adjust as per your schema)
function formatEducation(education) {
  return education
    .map(
      (edu) => `- ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution}`
    )
    .join("\n");
}

function formatSkills(skills) {
  return skills
    .map((skill) => `- ${skill.skillName} (Proficiency: ${skill.proficiency})`)
    .join("\n");
}

function formatAreasOfInterest(areasOfInterest) {
  return areasOfInterest.map((interest) => `- ${interest}`).join("\n");
}

function formatCertifications(certifications) {
  return certifications
    .map((cert) => `- ${cert.title} from ${cert.institution}`)
    .join("\n");
}

function formatProjects(projects) {
  return projects
    .map((project) => `- ${project.title}: ${project.description}`)
    .join("\n");
}

function formatCareerPreferences(careerPreferences) {
  const preferences = [];
  if (careerPreferences.preferredIndustries.length > 0) {
    preferences.push(
      `Preferred Industries: ${careerPreferences.preferredIndustries.join(
        ", "
      )}`
    );
  }
  if (careerPreferences.preferredJobRoles.length > 0) {
    preferences.push(
      `Preferred Job Roles: ${careerPreferences.preferredJobRoles.join(", ")}`
    );
  }
  if (careerPreferences.preferredLocations.length > 0) {
    preferences.push(
      `Preferred Locations: ${careerPreferences.preferredLocations.join(", ")}`
    );
  }
  if (careerPreferences.workEnvironment) {
    preferences.push(`Work Environment: ${careerPreferences.workEnvironment}`);
  }
  if (careerPreferences.salaryExpectation) {
    preferences.push(
      `Salary Expectation: ${careerPreferences.salaryExpectation}`
    );
  }
  if (careerPreferences.careerGoals) {
    preferences.push(`Career Goals: ${careerPreferences.careerGoals}`);
  }
  return preferences.join("\n");
}

export default runChat;
