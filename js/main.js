import { activities } from "./activities.js";
import { findActivity } from "./recommender.js";

const form = document.querySelector("#activity-form");
const result = document.querySelector("#recommendation-result");

function showMessage(title, message) {
  result.replaceChildren();

  const heading = document.createElement("h2");
  const description = document.createElement("p");
  heading.textContent = title;
  description.textContent = message;

  result.append(heading, description);
}

function handleRecommendation(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const mood = formData.get("mood");
  const energy = formData.get("energy");

  if (!mood || !energy) {
    showMessage("Choose both options", "Select a mood and an energy level first.");
    return;
  }

  const activity = findActivity(activities, mood, energy);

  if (!activity) {
    showMessage(
      "Try a simple reset",
      "No exact match was found. Take a short break and choose again when ready."
    );
    return;
  }

  showMessage(activity.name, activity.description);
}

form.addEventListener("submit", handleRecommendation);
