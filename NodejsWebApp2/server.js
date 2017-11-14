const Discord = require("discord.js");
const client = new Discord.Client();
var replyto;




//const ytdl = require('ytdl-core');
//const streamOptions = { seek: 0, volume: 1 };
//const broadcast = client.createVoiceBroadcast();
//const Cleverbot = require("cleverbot-node");
//const clbot = new Cleverbot;
//client.on("message", message => {
   // if (message.channel.type === "dm") {
      //  clbot.write(message.content, (response) => {
        //    message.channel.startTyping();
           // setTimeout(() => {
              //  message.channel.send(response.output).catch(console.error);
              //  message.channel.stopTyping();
        //    }, Math.random() * (1 - 3) + 1 * 1000);
     //   });
  //  }
//});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
  //  if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
   // if (message.content.indexOf(config.prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    //const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   // const command = args.shift().toLowerCase();
//});

//const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();
//client.on("message",  message => {
   // const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   // const command = args.shift().toLowerCase();
    //if (command === "test") {
        
       // let test = args[0];

       // message.reply('Hello ${message.author.username} ${test}');
   // }
//});
const scrapeIt = require("scrape-it")
var cwallet = 100;
var cprimary = 'Primary: 12 gauge';
var csecondary = 'Secondary: Hunting Knife';
var cspecial = 'Special: Deagle';
var cwood = 0;
var words = 'Wood';
var wood = cwood + words;
var proto = ' beta testing dummy';
var enemy = '';
var attack = '';
var damadge = '';
var protohealth = 10;
var health = '';
var determiner = '';
var kwallet = 100;
var kprimary = 'Primary: 12 gauge';
var ksecondary = 'Secondary: Hunting Knife';
var kspecial = 'Special: Deagle';
var kwood = 0;
var kwords = 'Wood';
var kwood = cwood + words;
var kproto = ' beta testing dummy';
var kenemy = '';
var kattack = '';
var kdamadge = '';
var kprotohealth = 10;
var khealth = '';
var kdeterminer = '';
var Chris = 'Chris';
var Queen = '';
var General = '';
var Mega = '';
var peg = ''
var cbank = 10000 + '$';
var qbank = 100;
var mbank = 100 + '$';
var pbank = 100 + '$';
var married = 'N/A';
var Developer = '158397118611062785';
var uptime = client.uptime;
var servers = client.guilds;
var ping = client.ping;
var citem1 = ' ';
var citem2 = ' ';
var citem3 = ' ';
var citem4 = ' ';

client.on('message', msg => {
    var nameab = '1.Chris';
    var nameac = '2.Killshot';
    const args = msg.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (msg.content === '-ping') {
        msg.reply('Pong!');
    };
    if (msg.content === '-sp') {
        client.user.setGame('I Eat Savage pizza');
    };
    if (msg.content === '-drunk') {
        client.user.setGame('drinking a 12 pack of Bud Light');
        msg.reply('god i drank one too many beers');
    };
    client.user.setGame('drinking a 12 pack of Bud Light');
    if (command === "-qcstore") {

        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Q&C Store',

                description: 'Items Available',
                fields: [{
                    name: '1.Personal bot access ',
                    value: '$50,000',
                },
                {
                    name: '2.Custom Role',
                    value: '$5,000',
                },
                {
                    name: '3.Your command added to bot:',
                    value: '$15,000'
                },
                {
                    name: '4.Custom Chat game',
                    value: '$50,000',
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris purchases use the -buy command and the item id"
                }
            }
        });

    }
    if (command === "-buy 1") {
        if (msg.author.id === Developer) {
            cbank -= 50000;
            if (citem1 === ' ') {
                citem1 = 'Personal bot token.'
            };


        }
    }
    if (command === "-gleave") {
        if (msg.author.id === Developer) {
            
            guild.available;
            guild.leave;

        }
    }
    if (command === "-nick") {
        if (msg.author.id === Developer) {
            let targetpractice = args[0];
            let nickname = args.slice(1).join(" ");
            msg.channel.send(`the target has had their nickname changed to ${nickname}`);
            var target = msg.mentions.members.first();
            
            target.setNickname(nickname, "what reason");

            };


        }
    

    if (command === "-spuser") {

        
        let stuff;
        let username = args.slice(0).join(" ");
        var ulink = `https://simpleplanes.com/U/${username}`
        // Scrape Warbrines's profile
         scrapeIt(`https://simpleplanes.com/U/${username}`, {
            name: ".user-page"
             , bio: ".col-md-6",
             joined: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-2 > div:nth-child(1) > h5",
             pic1: ".col-md-3",
             pic2: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-3 > img>src"


            
         }).then(content => msg.channel.send(new Discord.RichEmbed()
             .setTitle(`${username} ` + "'s " + " Profile")
             .setAuthor(content.name, content.pic2)
             /*
              * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
              */
             .setColor(0x00AE86)
             .setDescription(content.bio + "This user has " + content.joined)
             .setFooter("Generated By: Chris's slave", )
             .setImage(content.pic1)
             .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/71vTgdk1eML.png")
             /*
              * Takes a Date object, defaults to current date.
              */
             .setTimestamp()
             .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
             .addField("___",
             "___")
             /*
              * Inline fields may not display as inline if the thumbnail and/or image is too big.
              */
             .addField("Profile Link" , ulink, true)
             
             .addBlankField(true)
             .addField("__________","_",  true)).catch(console.error));
        
        
// =>
// { name: 'Emanuela Colta',
//   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-help") {
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Commands:',

                description: 'Incomplete documentation on available commands and Uses!!',
                fields: [{
                    name: '-sptournament ',
                    value: 'see latest simple planes tournament and enter',
                },
                {
                    name: '-spuser',
                    value: '-spuser (username)',
                },
                {
                    name: '-help',
                    value: 'duhhh'
                },
                {
                    name: '-ud',
                    value: '-ud (Urban dictionary search)',
                },
                {
                    name: '-google',
                    value: '-google (google search)',
                },
                {
                    name: '-profile',
                    value: '(Beta testers only profiles) -profile',
                },
                {
                    name: '-order',
                    value: '-order (your order)',
                },
                {
                    name: '-cook',
                    value: '(Chef only) -order (your order)',
                },
                {
                    name: 'say',
                    value: 'say (what you want the bot to say)',
                },
                {
                    name: '-feedback',
                    value: '-feedback (your feedback)',
                },
                {
                    name: '-support',
                    value: '-support (your issue)',
                },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris "
                }
            }
        });

      


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }

    if (command === "-sptournament") {


        
        
        // Scrape Warbrines's profile
        scrapeIt(`https://www.simpleplanes.com/Tournaments`, {
            name: "body > div.body > div > div > div:nth-child(2) > ul > li:nth-child(1) > div > div > div > a > h4"
            , bio: "body > div.body > div > div > div:nth-child(2) > ul > li:nth-child(1) > div > div > div > div > span",
            joined: ".header h5",
            pic1: "body > div.body > div > div > div:nth-child(2) > ul > li:nth-child(1) > div > a > span > img",
            pic2: ".Profile Picture",




        }).then(content => msg.channel.send(new Discord.RichEmbed()
            .setTitle(`Latsest Sp Tournament`)
            .setAuthor(content.name, content.pic1)
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription("Status: " + content.bio)
            .setFooter("Generated By: Chris's slave", )
            .setImage(content.pic1)
            .setThumbnail("https://jundroo.blob.core.windows.net/simpleplanes/Blog/Images/9JTlOrR.png")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            .addField("___",
            "___")
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addField("Tournament Entry", "https://www.simpleplanes.com/Tournaments", true)

            .addBlankField(true)
            .addField("__________", "_", true)).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-spplanes") {


        let stuff;
        let plane = args.slice(0).join(" ");
        // Scrape Warbrines's profile
        scrapeIt(`https://simpleplanes.com/Airplanes/Search?q=${plane}`, {
            name: "#___gcse_0 > div > div > div > div.gsc-wrapper > div.gsc-resultsbox-visible > div > div > div.gsc-expansionArea > div:nth-child(2) > div.gs-webResult.gs-result > div.gsc-thumbnail-inside > div > a"
            , bio: "#___gcse_0 > div > div > div > div.gsc-wrapper > div.gsc-resultsbox-visible > div > div > div.gsc-expansionArea > div:nth-child(2) > div.gs-webResult.gs-result > div.gsc-url-top > div.gs-bidi-start-align.gs-visibleUrl.gs-visibleUrl-long",


        }).then(content => msg.channel.send(content.name + `${plane} ` + content.bio).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-exitbot") {
        if (msg.author.id === Developer) {
            return 0;
        }
    }
    if (command === "-cookieme") {
        if (msg.author.id === Developer) {
            msg.channel.send('Heres a whole fucking dump truck sir');
            msg.channel.send('oh and incase thats not enough i brought the cookies i stole from kds.');
            console.log('cookie sent to master')
        }
    }
    if (command === "-ud") {
        var urban = require('urban');
        let ubdone = args.slice(0).join(" ");
        
    trollface = urban(`${ubdone}`);

        trollface.first(function (json) {
            console.log(json);
            var word = json.word;
            var def = json.definition;
            msg.channel.send('Word: ' + word);
            msg.channel.send('Definitions: ' + def);
    })
//let response = urban(arguement);
        //msg.channel.send(json);

    }
    if (command === "-mimic") {
        if (msg.author.id === Developer) {
        let text = args.slice(0).join(" ");
        msg.delete();
        msg.channel.send(`${text}`);
        console.log('worked');
        }

    }
    if (command === "-call ") {
        let ring = args.slice(0).join(" ");
        
            
                client.channels.get('373258944560234496').send(`${ring}`);
            
        
    }
    if (command === '-rprofile') {
        if (msg.author.id === "158397118611062785") {
            
        }
    }
    if (command === "-oreset") {
        if (msg.author.id === Developer) {
            
            msg.channel.send(`reset`);
        }
    }
    if (command === "-oveiw") {
        if (msg.author.id === Developer) {
            
            msg.channel.send('1. ' + ordera + '2.' + orderb + '3. ' + orderc + '4. ' + orderd );
        }
    }
    if (command === "-ctest") {
        if (msg.author.id === Developer) {
            msg.guild;
            msg.channel.send(msg.guild.id);
        }
    }
    if (command === "-order") {
        var qc = 331917422569455628;
        var FireSquad = 221248097420836864;
        let order = args.slice(0).join(" ");
        
        var qcs = qc.toString();
        var currentchannel = msg.channel.id;
        msg.guild.channels.get(currentchannel).createInvite().then(invite =>
            client.channels.get('373258944560234496').send(msg.author + " has ordered: " + `${order}` + " **From:**" + invite.url));

       
    }
    
    if (command === "-cook") {
        client.channels.get('373258944560234496').send(`I have put the order in`)
        setTimeout(myFunction, 60000)
        function myFunction() {
            client.channels.get('373258944560234496').send('Order:' +'order is cooked!!!');
        }
        

    }
    if (command === "-remindme") {
        
        setTimeout(myFunction, 60000)
        function myFunction() {
            msg.reply('Reminder')
        }


    }
    if (command === "-qca") {
        if (msg.author.id === Developer) {
            let QCA = args.slice(0).join(" ");
            client.channels.get('357617521203085313').send(`${QCA}`);
        }
        


    }
    if (command === "-dstats") {
        msg.channel.send(client.guilds);
        msg.channel.send(client.channels);
        msg.channel.send("Ping: " + "**" + client.ping + "ms" + "**" );


    }
    if (command === "-ginv") {
        var currentchannel = msg.channel.id;
        msg.guild.channels.get(currentchannel).createInvite().then(invite =>
            client.channels.get('373258944560234496').send(invite.url));
        
        
       


    }
    if (command === "-support") {
         replyto = msg.channel.id;
        let reasons = args.slice(0).join(" ");
        client.channels.get('379397753396264961').send(':telephone_receiver: ' + `${reasons}` + "** Sent from: ** " + msg.guild.id + "** And sent from the User: **" +  msg.author);



    }
    if (command === "-feedback") {
        
        let feedto = args.slice(0).join(" ");
        client.channels.get('379745904636461057').send(':telephone_receiver: ' + msg.author + ": " +  `${feedto}`);



    }
    
    if (command === "-testvar") {
        
        let reasons = args.slice(0).join(" ");
        client.channels.get('379397753396264961').send(':telephone_receiver: ' + `${replyto}`);



    }
    if (command === "-sr") {
        
        let replyfrom = args.slice(0).join(" ");
        client.channels.get(replyto).send(':telephone_receiver: ' + `${replyfrom}`);



    }
    
    if (command === "kds") {
        if (msg.author.id === Developer) {
            msg.channel.send('Oh god there he is.... deploying counter measures');
            msg.channel.send('a second later...... target eliminated');
            console.log('kds down')
        }
    }
        
    if (command === "-google") {
        require('google');
        var google = require('google');

        let gsearch = args.slice(0).join(" ");
        

        google.resultsPerPage = 2
        var nextCounter = 0

        google(`${gsearch}` , function (err, res) {
            if (err) console.error(err)

            for (var i = 0; i < res.links.length; ++i) {
                var link = res.links[i];
                console.log(link.title + ' - ' + link.href)
                console.log(link.description + "\n")
            }

            if (nextCounter < 4) {
                nextCounter += 1
                if (res.next) res.next()
            }
            msg.channel.send(link.title + ' - ' + link.href);
            msg.channel.send(link.description + "\n");
        })
        
    }
    if (command === "-botstats") {
        if (msg.author.id === Developer) {
            client.syncGuilds;
            client.pings;
            msg.channel.send({


                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'Bot Stats',

                    description: 'stats:',
                    fields: [{
                        name: 'Servers',
                        value: 'n/a',
                    },
                    {
                        name: 'Ping:',
                        value: ping,
                    },
                    {
                        name: 'Status',
                        value: 'n/a'
                    },
                    {
                        name: 'uptime',
                        value: uptime,
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Bot Owner: Chris"
                    }
                }
            });
        }
    }
    if (command === "ejoin1") {
        let player1 = args[0]; // Remember arrays are 0-based!.

        msg.reply(`Hello ${msg.author.username}, you are now player 2 `);
        var player2 = `${player1}`;
    }
    if (command === "ejoin2") {
        let player3 = args[0]; // Remember arrays are 0-based!.

        msg.reply(`Hello ${msg.author.username}, you are now player 3 `);
        var player4 = `${player3}`;
    }
    //if (command === "-tplay") {
       // voiceChannel.join()
          //  .then(connection => {
            //    const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter: 'audioonly' });
             //   broadcast.playStream(stream);
              //  const dispatcher = connection.playBroadcast(broadcast);
           // })
          //  .catch(console.error);
   // }
    if (command === "ejoin3") {
        let player5 = args[0]; // Remember arrays are 0-based!.

        msg.reply(`Hello ${msg.author.username}, you are now player 4 `);
        var player6 = `${player5}`;
    }
    if (command === '-profile') {
        if (msg.author.id === "158397118611062785") {
            msg.channel.send({


                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'The profile of Chris',

                    description: 'The Kickass developer of this bot',
                    fields: [{
                        name: 'Bank:',
                        value: cbank,
                    },
                    {
                        name: 'Position:',
                        value: 'Developer',
                    },
                    {
                        name: 'Married to:',
                        value: married 
                    },
                    {
                        name: 'Leaderboard rank:',
                        value: '#1',
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Bot Owner: Chris"
                    }
                }
            });
        }
        if (msg.author.id === "291045397894266882") {
            msg.channel.send({


                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'The profile of Queen',

                    description: 'Has not been inputed',
                    fields: [{
                        name: 'Bank:',
                        value: qbank,
                    },
                    {
                        name: 'Position:',
                        value: 'Owner',
                    },
                    {
                        name: 'Married to:',
                        value: married
                    },
                    {
                        name: 'Leaderboard rank:',
                        value: 'N/A',
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Bot Owner: Chris"
                    }
                }
            });
        }
        if (msg.author.id === "321050036563869696") {
            msg.channel.send({


                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'The profile of Mega',

                    description: 'Beater',
                    fields: [{
                        name: 'Bank:',
                        value: mbank,
                    },
                    {
                        name: 'Position:',
                        value: 'beta tester',
                    },
                    {
                        name: 'Married to:',
                        value: 'loner'
                    },
                    {
                        name: 'Leaderboard rank:',
                        value: 'N/A',
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Bot Owner: Chris"
                    }
                }
            });
        }
        
            if (msg.author.id === "367584320623345664") {
                msg.channel.send({


                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'The profile of Pegasusgirl',

                        description: 'Watch out i fitbox',
                        fields: [{
                            name: 'Bank:',
                            value: pbank,
                        },
                        {
                            name: 'Position:',
                            value: 'A savage pizza',
                        },
                        {
                            name: 'Married to:',
                            value: 'loner'
                        },
                        {
                            name: 'Leaderboard rank:',
                            value: 'N/A',
                        }
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "Bot Owner: Chris"
                        }
                    }
                });
            }
        
    }
    if (command === '-etest') {
        let eventname = args[0]; // Remember arrays are 0-based!.
        let eventtype = args[1]; // Remember arrays are 0-based!.
        let hostname = args[2]; // Remember arrays are 0-based!.
        var eventname1 = `${eventname}`;
        var eventtype1 = `${eventtype}`;
        var eventhost = `${hostname}`;
        msg.channel.send({
            

            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: eventname,
                
                description: eventtype,
                fields: [{
                    name: 'eventhost:',
                    value: eventhost,
                },
                    {
                        name: 'player',
                        value:'2:' + player2,
                    },
                {
                    name: 'player:',
                    value: '3:' + player4,
                },
                {
                    name: 'player:',
                    value: '4:' + player6,
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Chris"
                }
            }
        });
    };
    if (command === '-gcs') {
        let Charachtername = args[0];  // Remember arrays are 0-based!.
        let Charachterdescription = args.slice(0).join(" ");  ; // Remember arrays are 0-based!.
        
        
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Charachter name: ' +  `${Charachtername}`,

                description: 'Description: ' + `${Charachterdescription}`,
                
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Generated by Chris's Slave"
                }
            }
        });
    };
    if (command === "2v") {
        

        msg.reply(player2);
    }
    if (command === "say") {
        let say = args.slice(0).join(" ") // Remember arrays are 0-based!.
        
        msg.reply(`Hello ${msg.author.username}, you wanted me to say ${say} `);
    }
    if (command === "-qapprove") {
        let approve = args[0]; // Remember arrays are 0-based!.
        if(msg.author.id === "143531981286801409"){
            msg.reply(`You have been given Queens stamp of approval ${approve} `);
        }

        
    }
    if (msg.content === '-random meme') {
        msg.reply('How about a rickroll instead https://www.mediaite.com/wp-content/uploads/2015/11/anonymous-isis-rickroll.jpg');
    };
    if (msg.content === '-rpc') {
        msg.reply('The current players are:');
        msg.channel.send(nameab);
        msg.channel.send(nameac);
    };
    if (msg.content === '-profiler') {
        
    };
    if (command === '-yiff') {
        console.log('General choses his prey')
        if (msg.author.id === "143531981286801409") {
            let yiffer = args[0];
            
            msg.reply(`You have been yiffed ${yiffer} `);
        }
    };
    if (command === '-yifftest') {
        console.log('General choses his prey')
        if (msg.author.id === "158397118611062785") {
            let yiffer = args[0];

            msg.reply(`You have been yiffed ${yiffer} `);
        }
    };
    if (msg.content === '-cwallet') {
        msg.reply('Your money is:');
        msg.channel.send(cwallet);
    };
    if (msg.content === '-cbuy hunting rifle') {
        if (msg.author.id === "158397118611062785") {
            msg.reply('10 dollars have been taken');
            cwallet -= 10;
            cprimary = 'Primary: hunting rifle';
        }
    };
    if (msg.content === '-cinv') {
        msg.reply('Inventory of Chris:');
        msg.channel.send(cprimary);
        msg.channel.send(csecondary);
        msg.channel.send(cspecial);
        msg.channel.send(wood);

    };
    if (msg.content === '-chop') {
        if (msg.author.id === "158397118611062785") {
            msg.channel.send('You have choped down:');
            var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

            function randomWholeNum() {

                // Only change code below this line.
                var randomNumberBetween0and9 = Math.floor(Math.random() * 10);

                return Math.floor(Math.random() * 10);
            }
            var cwood = randomNumberBetween0and19;
            msg.channel.send(cwood);
        }
    };
    if (msg.content === '-store') {

        msg.channel.send('welcome to the Survivors store!!');
        msg.channel.send('Primary Weapons for Sale:');
        msg.channel.send('1. 1.12 Gauge:');
        msg.channel.send('2. Hunting bow');
        msg.channel.send('3. Compound bow');
        msg.channel.send('4. 50 Cal');
        msg.channel.send('Secondaries for sale:');
        msg.channel.send('1. luger');
        msg.channel.send('2. hunting knife');
        msg.channel.send('Specials for sale');
        msg.channel.send('1. minigun');
        msg.channel.send('2. rpg');

    };
    if (msg.content === '-cbuy Hunting Bow') {
        if (msg.author.id === "158397118611062785") {

            msg.channel.send(' Chris has bought a hunting bow :O');
            cwallet -= 20
            cprimary = 'Hunting Bow';
        }
    };
    if (msg.content === '-cbuy Compound Bow') {
        if (msg.author.id === "158397118611062785") {

            msg.channel.send(' Chris has bought a Compound Bow :O');
            cwallet -= 10000
            cprimary = 'Compound Bow';
        }
    };
    if (msg.content === '-cbuy 50 Cal') {
        if (msg.author.id === "158397118611062785") {

            msg.channel.send(' Chris has bought a 50 Cal :O');
            cwallet -= 100000
            cprimary = '50 Cal';
        }
    };
    if (msg.content === '-encounter') {
        var randomNumberBetween0and6 = Math.floor(Math.random() * 10);

        function randomWholeNum() {

            // Only change code below this line.
            var randomNumberBetween0and9 = Math.floor(Math.random() * 10);

            return Math.floor(Math.random() * 10);
        }
        determiner = randomNumberBetween0and6;
        console.log(`encounter initiated`);

        if (determiner === 1) {
            enemy = 'goblin';
            protohealth = 40;
            msg.channel.send('A goblin has appeared');

        };
        if (determiner === 2) {
            enemy = 'theif';
            protohealth = 15;
            cwallet -= 5;
            msg.channel.send('A theif has appeared and stolen 5 money');

        };
        if (determiner === 3) {
            enemy = 'hydra';
            protohealth = 150;
            
            msg.channel.send('A hydra has appeared');

        };
        if (determiner === 4) {
            enemy = 'bill murry';
            protohealth = 1;

            msg.channel.send('A bill murry has appeared');

        };
        if (determiner === 5) {
            enemy = 'bill cosby';
            protohealth = 1;

            msg.channel.send('A bill cosby has appeared');

        };
        if (determiner === 7) {
            
            

            msg.channel.send('A spinach has appeared stay abck you filthy animal');

        };
        if (enemy === 8) {
            
            

            msg.channel.send('congrats you didnt encounter shit');

        };
        if (enemy === 9) {
            
            

            msg.channel.send('congrats you didnt encounter shit');

        };
        if (enemy === 10) {
            
            

            msg.channel.send('congrats you didnt encounter shit');

        };
        if (enemy === 6) {
            enemy = 'giant';
            protohealth = 200;
            msg.channel.send('A giant has appeared');

        };
};
    if (msg.content === '-cattack2') {

       if (msg.author.id === "158397118611062785") {
            var attack2 = ' you quickly pull your ' + cprimary + ' and take a shot at the ' + enemy;
            msg.channel.send(attack2);
            var randomNumberBetween0and5 = Math.floor(Math.random() * 10);

            function randomWholeNum() {

                // Only change code below this line.
                var randomNumberBetween0and9 = Math.floor(Math.random() * 10);

                return Math.floor(Math.random() * 10);
            }
            attack = randomNumberBetween0and5;
           
            damadge = attack + ' damadge was dealt.';
            protohealth -= attack;
            msg.channel.send(damadge);
            health = ' The ' + enemy + ' has ' + protohealth + ' health left. ';
            msg.channel.send(health);
            if (protohealth < 0) {
                function randomWholeNum() {

                    // Only change code below this line.
                    var randomNumberBetween0and9 = Math.floor(Math.random() * 10);

                    return Math.floor(Math.random() * 10);
                } var winnings = randomNumberBetween0and5;
                cwallet += winnings;
                msg.channel.send('you won ' + winnings + ' money')};
            if (protohealth < 0) { msg.channel.send('you win!!') };
            
            if (protohealth < 0) { console.log(msg.author + ' killed an enemy for ' + winnings)}
            
        }
        
    };
    if (msg.content === '-ctestreset') {
        if (msg.author.id === "158397118611062785") {
            protohealth = 10
            msg.channel.send(' The test dummys health was restored');
        }
    };
    if (msg.content === '-cbankrupt') {
        if (msg.author.id === "158397118611062785") {
            cwallet = 0
            msg.channel.send(' youve bankrupted chris |;(');
        }
    };
    if (msg.content === '-crichen') {
        if (msg.author.id === "158397118611062785") {
            cwallet = 9999999
            msg.channel.send(' What have you done :O');
        }
    };
    if (msg.content === '-cdefault') {
        if (msg.author.id === "158397118611062785") {
            cwallet = 1000
            msg.channel.send(' What have you done :O');
        }
    };
    
});






 









client.login('MzQxMzAzMTEyMjEzOTg3MzI5.DMaqag.qxR_c9sUEjs5tMwTLJq5UYEUm_w');