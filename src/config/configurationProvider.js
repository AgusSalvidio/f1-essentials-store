const requireEnv = (key) => {
  const value = process.env[key];

  if (typeof value === "undefined") {
    console.warn(`The environment variable "${key}" is not defined.`);
  }

  return value;
};

export const configurationProvider = {
  databaseUrl: requireEnv("EXPO_PUBLIC_FIREBASE_DATABASE_URL"),
  apiKey: requireEnv("EXPO_PUBLIC_FIREBASE_API_KEY"),
  authUrl: requireEnv("EXPO_PUBLIC_FIREBASE_AUTH_URL"),
};
