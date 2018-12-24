const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
var prefix = ("!");


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[!aide] <from 🔱 𝓢𝓟𝓨 🔱>', type: 0}})
    console.log("Bot pret");
});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Viewers");
    member.guild.channels.find("name", "general").send(`:ok_hand: ${member.user.username} bienvenue sur le discord de MystikRP !`)
    member.addRole(role)
})

bot.on('guildMemberRemove', member =>{
    member.guild.channels.find("name", "general").send(`:weary: ${member.user.username} vien de nous quitter ! Séchez vos larmes aussi-non je vais pleurer :weary: !`)
})

            bot.on('message', message => {
                if (message.content === "!mention"){
                    message.reply("")
                }

        if (message.content === prefix+ "aide"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Liste des commandes :"," Voici les commandes du Bot !")
                .addField("!infos", "Cette commande permet de vous informer sur le serveur.")
                .addField("!staff", "Cette commande est utile si vous avez besoins de parler a un staff d'un certain grade , elle permet d'afficher la liste des staff de MystikRP ainsi que leur grade.")
                .addField("!maj", "Cette commande permet de voir les mises à jours prévus ou déjâ faites sur MystikRP !")
                .addField("!connect", "Cette commande permet de te connecter au serveur MystikRP depuis discord !")
                .addField("!liens", "Cette commande vous affiche les liens utiles du discord ou du serveur.")
            message.channel.sendEmbed(help_embed);
        }
                
        if (message.content === prefix+ "connect"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Clique ici pour te connecter au serveur MystikRP :","[FR] MYSTIK ROLEPLAY | Map & Addons exclus | LoloxCommunity.com")
                .addField("Se connecter sur MystikRP :", "steam://connect/164.132.116.56:27260")
            message.channel.sendEmbed(help_embed);
        }            
                
        if (message.content === prefix+ "infos"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("MystikRP :","MystikRP est un serveur Rôleplay qui est composé d'un map personnalisé crée par Pelisma (Mappeur de MystikRP), MystikRP contient parfois ses propres addons !")
                .addField("Nom du serveur :", "[FR] MYSTIK ROLEPLAY | Map & Addons exclus | LoloxCommunity.com")
                .addField("IP :", "164.132.116.56:27260")
                .addField("Gamemode :", "DarkRP")
                .addField("Map :", "rp_florida_v2")
                .addField("Site Web :", "https://loloxcommunity.com/")
                .addField("Workshop :", "https://steamcommunity.com/sharedfiles/filedetails/?id=1184169554")
            message.channel.sendEmbed(help_embed);
        }
 
        if (message.content === prefix+ "maj"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jours au total :"," **4**")
                .addField("2.2", "!2.2")
                .addField("2.3", "!2.3")
                .addField("2.4", "!2.4")
                .addField("2.5 (Future MAJ)", "!2.5")
            message.channel.sendEmbed(help_embed);
        }
        
        if (message.content === prefix+ "liens"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Iliens :","voici les liens utiles (YouTube , Workshop , Twitch...)")
                .addField("YouTube Lolox", "https://www.youtube.com/channel/UCQmyH_HI5Sl41oBqGw7o7gw")
                .addField("Twitch Lolox", "https://www.twitch.tv/lolox_fr/")
                .addField("Site Web", "https://LoloxCommunity.com/")
                .addField("Discord MystikRP", "https://discord.gg/Yxx6CAM")
                .addField("Workshop MystikRP", "https://steamcommunity.com/sharedfiles/filedetails/?id=1184169554")
            message.channel.sendEmbed(help_embed);
        }
                
        if (message.content === prefix+ "2.2"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jour 2.2 :","Modifications sur le serveur :")
                .addField("2.2", "**-Optimisation des addons + ajout d'une préconfig pour améliorer la fluidité et réduire la perte d'fps**\n **-Remise en fonction du métier entrepreneur**\n **-Modification des grades de gendarmes**\n **-Modification des skins de différent jobs**\n **-Debug de plusieurs addons**\n **-Debug du ban plus importation des règles en jeu**\n **-Amélioration des performance du serveur**\n **-Ajout de munition directement dans les armes du serveur en tant qu'agent de la bac policier , gign etc ....**\n **-Modification de certains véhicules**\n **-Debug de l'addon maire**\n **-Ajout du métier fermier + pêcheur**")
            message.channel.sendEmbed(help_embed);
        } 
                
        if (message.content === prefix+ "2.3"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jour 2.3 :","Modifications sur le serveur :")
                .addField("2.3", "**-Optimisation des addons + Boost FPS**\n **-Nerf de certains métier**\n **-Modification des grades de gendarmes**\n **-Modification de la map**\n **-Modification du systeme de vente d'appartement**\n **-Amélioration des performance du serveur**\n **-Debug de l'addon maire**\n **-Ajout du métier fermier (Animaux demain)**\n **-Ajout d'un nouveau systeme pénitencier (SOON)**")
            message.channel.sendEmbed(help_embed);
        }
                
        if (message.content === prefix+ "2.4"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jour 2.4 :","Modifications sur le serveur :")
                .addField("2.4", "**-Modification des véhicules possédant des sirènes + ajout du VCMOD ELS**\n **-Ajout des plaques d'immatriculation**\n **-Ajout des Animaux (Normalement)**\n **-Ajout dans les warn des sanctions déjà crée** \n **-Optimisation du Worshop** \n **-Optimisation du join au serveur** \n **-Optimisation des Addons** \n **-Stabilisation du serveur**\n **-Suppression du Nom Roleplay + de la vie + Changement de métier**\n **-Traduction du Darkrp** \n **-Ajout de deux nouveaux métiers mystère !**\n **-Réglages de certains beugs** \n **-Ajout de munitions lors du spawn en gendarme ou autres métiers** \n **-Ajout de nouveaux grades pour la police , gign**\n **-Ajout de grades pour l'agent de sécurité** \n **-Ajout de grades pour le Pompier**\n **-Ajout de grades pour le Médecin **")
            message.channel.sendEmbed(help_embed);
        }
                
         if (message.content === prefix+ "2.5"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jour 2.5 :","Commande non-disponible pour le moment , merci de ré-essayer !")    
            message.channel.sendEmbed(help_embed);
        }
                

        if (message.content === prefix+ "staff"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Staff du serveur :"," MystikRP")
                .addField("Fondateur", "Lolox")
                .addField("Mappeur", "Pelisma")
                .addField("Codeur", "Shadow")
                .addField("Superadmin / Développeur", "Kobralost")
                .addField("Administrateurs", "Stylaxx\n Skyflix\n Alex Backo\n 🔱 𝓢𝓟𝓨 🔱\n ChickenNuggets (Hoie)")
            message.channel.sendEmbed(help_embed);
        }

    });

    bot.login(token);
