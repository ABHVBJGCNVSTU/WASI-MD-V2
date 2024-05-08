//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/JxJY873QyUU65Up2DvDSO1";
global.website = process.env.GURL || "https://chat.whatsapp.com/JxJY873QyUU65Up2DvDSO1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9b85176df42fba9a43e2d.jpg";
global.devs = "923114397148";
global.sudo = process.env.SUDO || "923114397148,923192173398";
global.owner = process.env.OWNER_NUMBER || "923114397148";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pHU2N5eGo5bjBkTjZKTWpYTDZLY1o3UGkvU21tTEwwSVVpbGNvSExYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxERkJwT1FmVktydHlvTUNHTTcvbW1LdjF0VWJWRERXZjFwOTU2MU5GMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSEhaOWRGcCtHNHBkcG8rYnB6Tm94d0cwNzJVa3lRWG1VakVoUkN2NkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEblpRbmNzN3JGc1RhL3hDUGN5TkNEcGk4alBwMWVhaDNuekJERFlsS1IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQTEZSTU1xUkx6L0tDNjQrMEhKL0N4MGFjRUZBVk1mZG5Na1B2YlpTMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpNNlZDR0FMdnV6ODBxemJ4U3RQL0g1ZHVzUHpBVFZGYnVCU0laVU1EREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBhV0dJT2RSZEEwNGRObmlZcDZIYlU4YUQ3Ri9UQXBLVGJLTE9iRFBWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdhZzZCUzA4NHU0VElvYmpPeGFrek14bW5BRU9veHI4M1gvdlFCMWJSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNwVTg0SkxIeEhNd0dBN0JQdUhMQVRjc2g0MkZyM3ROQUZ2b0pQL0hMTmtSUXR0R0NaVDZYZXk3YmtxSFBhZC94NFhrTWhKNm9zS0xMYzcrak1HZkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJaQzN1S0RlSEJOc2ZiblJvODJFdldHZGNsVmJUaFMvTWZsMVpaTWVpQlNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1N19aRjYxTlJFeWJXeFRyUlB2ZmZ3IiwicGhvbmVJZCI6IjI4N2EyNjAxLWNmZmEtNDJhYy1iMTdkLTJhM2Q4ZDVhNTkwMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5M0N3R2I0aHFkSGpLR1lpeGNKUmIvLzIxZnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBmNkJTN1kyMHJrRGVuTW5XR2M5bHlJcVU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpTSjhOUUNOIiwibWUiOnsiaWQiOiI5MjMxMTQzOTcxNDg6NDJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW1pciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5vNGhVUWtzenRzUVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYzY4SDJHYzgvd29DTXg4THd1VzJ5dWRieVBXVzQySmJZS3VDZGJSQXdDaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUkpOYmlHQS9Xd3JCbGh5VytDWElNQ0VkZzgxRmdtMXI4c2hrRWllM253Q2crclpQT2NITTNqajl3TlZBT3pRb0lPNTZyeXY5dmlZemlzTWJXd0xsQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkFCL0UzSExMLzkvK3N1L0FKdkJ2UDBBUVgxWEZ2WkROMHJNMWhoNGozODdMbmVNYmdkUXh1UjB3RGtIUm1OZC9DWXlXQTgvRC9OSnNJNzBOQUdKNUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTE0Mzk3MTQ4OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhPdkI5aG5QUDhLQWpNZkM4TGx0c3JuVzhqMWx1TmlXMkNyZ25XMFFNQXAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTUxNjg3OTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQW9vIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-MIAN-AMIR-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "AMIR",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923114397148",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
