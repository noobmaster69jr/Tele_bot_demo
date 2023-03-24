const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { BOT_TOKEN } = require("./BotToken")

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx)=> ctx.reply("welcome fellas"))

bot.hears("hi", (ctx) => ctx.reply("hey there, wassup..."));
bot.on(message("sticker"), (ctx) => ctx.reply("👀"));
bot.launch()