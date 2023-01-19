import { Message, Client } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
});

client.once("ready", () => {
  console.log("Ready!");
  console.log(client.user?.tag)
});

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
  if (message.content === "ぱ") {
    message.channel.send({ files: ['./img/1.jpg'] });
  } else if (message.content === "けき") {
    message.channel.send({ files: ['./img/2.jpg'] });
  } else if (message.content.startsWith('ぱんけーき')) {
    message.channel.send({ files: ['./img/3.jpg'] });
  }
});

client.login(process.env.TOKEN);
