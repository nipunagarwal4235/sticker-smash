const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.nipunagarwal.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.nipunagarwal.stickersmash.preview";
  }

  return "com.nipunagarwal.stickersmash";
};

const getAppName = () => {
  if (IS_DEV) {
    return "StickerSmash (Dev)";
  }

  if (IS_PREVIEW) {
    return "StickerSmash (Preview)";
  }

  return "StickerSmash: Emoji Stickers";
};

export default {
  expo: {
    name: getAppName(),
    slug: "StickerSmash",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#25292e",
    },
    ios: {
      buildNumber: "1",
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      versionCode: 1,
      package: getUniqueIdentifier(),
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d95febac-83a1-4f86-9e86-581b8fba52f5",
      },
    },
    owner: "nipunagarwal",
  },
};
