const { Telegraf, Markup } = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN); // BOT_TOKEN из env

bot.start((ctx) => {
    return ctx.reply(
        "Привет! Нажми кнопку, чтобы открыть WebApp 👇",
        Markup.keyboard([
            [
                Markup.button.webApp(
                    "Открыть WebApp",
                    "https://webviewexample.vercel.app//" // сюда подставишь URL фронтенда
                ),
            ],
        ]).resize()
    );
});

bot.launch();
console.log("Bot started");

// аккуратно закрываем на SIGINT / SIGTERM
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
