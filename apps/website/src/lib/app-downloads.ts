/** Latest finished Expo preview builds (GreenCoatVets). Override via env if a newer build is published. */
export const ANDROID_APP_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL?.trim() ||
  "https://expo.dev/artifacts/eas/9B7McA4eW2J831h3Mys9rNcNW-WQxl_CLnJHlgRSmbA.apk";

export const IOS_APP_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL?.trim() ||
  "https://expo.dev/artifacts/eas/FfN8z6GeXM3Hf0XUucJMwqHxQZiRhT2VtvG2DL65AsA.tar.gz";
