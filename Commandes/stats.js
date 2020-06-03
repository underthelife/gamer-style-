const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    // if(!membre) return message.channel.send("Veuillez mentionnez un utilisateur !"); 

    message.channel.send({
        embed: {
            color: 3447003,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL()
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id 
            },
            {
                name: "Crée le :",
                value: moment.utc(membre.user.createdAt).format("LLL")
            },
            {
                name: "Jeu :",
                value:  `${membre.user.presence.activities[0] ? `${membre.user.presence.activities[0].name}` : "L'utilisateur n'est pas en train de jouer !"}`
            },
            {
                name: "Rejoin le :",
                value: moment.utc(membre.joinedAt).format("LLL")
            }
        ],
        footer: {
            text: `Informations de l'utilisateur ${membre.user.username}`
        }
    }
})
};

module.exports.help = {
name: "stats"
}