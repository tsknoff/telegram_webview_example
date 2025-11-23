// index.js
import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

// команда /start с webapp-кнопкой
bot.start((ctx) => {
    ctx.reply("Открой WebApp:", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Открыть приложение",
                        web_app: {
                            url: "https://webviewexample.vercel.app", // твой URL
                        },
                    },
                ],
            ],
            resize_keyboard: true,
        },
    });
});

// данные из WebApp приходят в виде web_app_data
bot.on("message", (ctx) => {
    if (ctx.message.web_app_data) {
        const data = JSON.parse(ctx.message.web_app_data.data);
        console.log("Получили из WebApp:", data);
        ctx.reply(`WebApp сказал: ${data.action}, ts=${data.ts}`);
    }
});

bot.launch();
