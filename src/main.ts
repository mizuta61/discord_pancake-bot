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
    message.channel.send("https://imgur.com/eoeCqai");
  } else if (message.content.startsWith('ぱんけーき')) {
    message.channel.send("https://imgur.com/SD0Lcs3");
  }
});

client.login(process.env.TOKEN);
