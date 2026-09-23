function findActivity(activities, mood, energy) {
  const matches = activities.filter(
    (activity) => activity.mood === mood && activity.energy === energy
  );

  if (matches.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * matches.length);
  return matches[randomIndex];
}

export { findActivity };
