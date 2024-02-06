const config: AppConfig = {
  WEBSITE_NAME: "XERA",

  MAX_FILE_SIZE: 1 * 1024 * 1024,
};
if (process.env.NODE_ENV === "development") {
  config.LOGIN_URL = "https://dev-blockchain-era-pt.tbe.io/auth/login";
  config.REGISTER_URL =
    "https://dev-bid-ft-pt.myblockchainid.io/auth/register";
} else {
  config.LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;
  config.REGISTER_URL = process.env.NEXT_PUBLIC_REGISTER_URL;
}
export default config;
