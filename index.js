const Discord = require('discord.js');
const token = process.env.token;
const bot = new Discord.Client();
var prefix = ("!");


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[!help] <from 🔱 𝓢𝓟𝓨 🔱>', type: 0}})
    console.log("Bot pret");
});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Membre");
    member.guild.channels.find("name", "general").send(`Bienvenue à toi **${member.user.username}** sur le Discord officiel de __**Dycode.fr | Hébergeur Jeux**__ . N'hésite pas à prendre le temps de visiter les channels et de regarder les informations ! Merci.`)
    member.addRole(role)
})

bot.on('guildMemberRemove', member =>{
    member.guild.channels.find("name", "general").send(`Aurevoir **${member.user.username}** et bonne continuation !`)
})

            bot.on('message', message => {
                if (message.content === "!mention"){
                    message.reply("")
                }

        if (message.content === prefix+ "help"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Liste des commandes :", "Pour executer une commande tapez dans un salon textuel !<commande>")
                .addField("!offres", "Cette commandes est idéale si vous cherchez un serveur !\n \n __**DyBot**__ **est en cours de développement , d'autres commandes arrivent bientôt !**")
            message.channel.sendEmbed(help_embed);
        }
                
        if (message.content === prefix+ "offres"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#046380')
                .addField("Offres :","Dycode vous proposes des offres sur :")
                .addField("Garry's Mod", "!offreg")
                .addField("TeamSpeak 3", "!offret")
                .addField("Minecraft", "!offrem")                
            message.channel.sendEmbed(help_embed);
        }
        
        if (message.content === prefix+ "offreg"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#046380')
                .addField("Offres :","Vous avez choisi les offres Garry's Mod :")
                .addField("Serveur Développement", "**5 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**~~3.50€~~ - 2.00€**__ `PAR MOIS` [+1€ Frais d'instalattions]")  
                .addField("Serveur Entre Pote", "**10 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**~~5.00€~~ - 3.50€**__ `PAR MOIS` [+1€ Frais d'installations]")   
                .addField("Serveur Mini Jeux", "**24 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**~~12.00€~~ - 8.00€**__ `PAR MOIS` [+1€ Frais d'installations]")     
                .addField("Serveur DarkRP *", "**32 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**~~15.00€~~ - 11.00€**__ `PAR MOIS` [+1€ Frais d'installations]")         
                .addField("Serveur DarkRP +", "**64 slots**\n **Anti DDOS**\n **Livraison sous 5mn**\n __**~~20.00€~~ - 16.00€**__ `PAR MOIS` [+1€ Frais d'installations]") 
                .addField("Serveur DarkRP ++*", "**128 slots**\n **Anti DDOS**\n **Livraison sous 5mn**\n __**~~30.00€~~ - 22.00€**__ `PAR MOIS` [Frais d'installations Gratuits]")                
            message.channel.sendEmbed(help_embed);
        }
        
        if (message.content === prefix+ "offret"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#046380')
                .addField("Offres :","Vous avez choisi les offres TeamSpeak3 :")
                .addField("TeamSpeak3", "**32 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**2.00€**__ `PAR MOIS` [+1€ Frais d'instalattions]")                
            message.channel.sendEmbed(help_embed);
        }       

        if (message.content === prefix+ "offrem"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#046380')
                .addField("Offres :","Vous avez choisi les offres Minecraft:")
                .addField("Serveur Développement", "**5 slots**\n **Anti DDOS**\n **Livraison sous 10mn**\n __**~~2.50€~~ - 1.00€**__ `PAR MOIS` [+1€ Frais d'instalattions]")               
            message.channel.sendEmbed(help_embed);
        }       

    });

    bot.login(token);
