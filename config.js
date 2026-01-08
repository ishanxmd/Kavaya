// config.js
module.exports = {
    // Bot Settings
    PREFIX: process.env.BOT_PREFIX || '.',
    MODE: process.env.BOT_MODE || 'public', // 'self' or 'public'
    BOT_NAME: process.env.BOT_NAME || 'ғʀᴇᴇ sᴄ ᴍɪɴɪ',
    VERSION: process.env.BOT_VERSION || '1.0.0',
    BOT_FOOTER: process.env.BOT_FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ',
    
    // Connection Settings
    MAX_RETRIES: parseInt(process.env.MAX_RETRIES) || 3,
    OTP_EXPIRY: parseInt(process.env.OTP_EXPIRY) || 300000,
    
    // Status Automation
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true', // true / false
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true', // true / false
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'true', // true / false
    AUTO_LIKE_EMOJI: ['💋', '🍬', '🫆', '💗', '🎈', '🎉', '🥳', '❤️', '🧫', '🐭'],
    
    // Group Settings
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || 'https://chat.whatsapp.com/ISXkG9yKiUf6QxkVEBJwoQ',
    
    // File Paths
    ADMIN_LIST_PATH: process.env.ADMIN_LIST_PATH || './admin.json',
    SESSION_BASE_PATH: process.env.SESSION_BASE_PATH || './session',
    NUMBER_LIST_PATH: process.env.NUMBER_LIST_PATH || './numbers.json',
    
    // Media URLs
    RCD_IMAGE_PATH: process.env.RCD_IMAGE_PATH || 'https://files.catbox.moe/d0z6ym.JPG', // add your bot url
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || 'https://files.catbox.moe/d0z6ym.JPG', //add ur bot url
    
    // Newsletter Settings
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363407036993521@newsletter',
    NEWSLETTER_MESSAGE_ID: process.env.NEWSLETTER_MESSAGE_ID || '428',
    
    // Owner Settings
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94785357011', // ᴀᴅᴅ ʏᴏᴜʀ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
    OWNER_NAME: process.env.OWNER_NAME || 'ᴍʀ xᴅ ᴋɪɴɢ', // ᴀᴅᴅ ʏᴏᴜʀ ᴏᴡɴᴇʀ ɴame
    
    // Channel Links
    CHANNEL_LINK: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029VbBgUm07IUYOmLOoRc1m',
    
    // GitHub Settings
    GITHUB_OWNER: process.env.GITHUB_OWNER || 'ishanxmd', //add your github username
    GITHUB_REPO: process.env.GITHUB_REPO || 'kavaya', // add your github repo name
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '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', //add your github token
    
    // API Keys
    TIKTOK_API_KEY: process.env.TIKTOK_API_KEY || 'free_key@maher_apis',
    NASA_API_KEY: process.env.NASA_API_KEY || '8vhAFhlLCDlRLzt5P1iLu2OOMkxtmScpO5VmZEjZ',
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || '2d61a72574c11c4f36173b627f8cb177'
};
