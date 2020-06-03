const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    message.delete();

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`Tu n'a pas l'autorisation d'expulser un membre du serveur.`);

    if(message.mentions.users.size === 0) {
        return message.channel.send(`${member.mention} tu dois mentionner un membre !`);
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick){
        return message.channel.send(`Ce membre n'existe pas : / `);
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Je ne peux pas kick : (`);
    message.mentions.users.first().send(`Tu as été kick de **${message.guild.name}** par ${message.author.username} `).catch(console.error);

    kick.kick().then(member => {
        
        message.channel.send(`${member.user.username} à été kick ! Auteur : ${message.author.username}`);
    });
};

module.exports.help = {
    name:"kick"
}