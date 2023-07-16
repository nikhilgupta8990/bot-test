const { Telegraf } = require('telegraf');
require('dotenv').config();
const { message } = require('telegraf/filters');

const bot = new Telegraf(process.env.BOT_TOKEN,{
    telegram: {
      apiRoot: process.env.ROOT
    }
  });
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch(
    // {
    // webhook: {
    //   // Public domain for webhook; e.g.: example.com
    //   domain: process.env.WEBHOOK_DOMAIN,
  
      // Port to listen on; e.g.: 8080
      //port: process.env.PORT,
  
      // Optional path to listen for.
      // `bot.secretPathComponent()` will be used by default
      //hookPath: webhookPath,
  
      // Optional secret to be sent back in a header for security.
      // e.g.: `crypto.randomBytes(64).toString("hex")`
      //secretToken: randomAlphaNumericString,
    //},
  //}
  );

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));