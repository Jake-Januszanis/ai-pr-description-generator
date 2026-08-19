export function getUserPreferences(user) {
  return {
    theme: user.theme ?? "light",
    notifications: user.notifications ?? true,
    language: user.language ?? "en",
  };
}

