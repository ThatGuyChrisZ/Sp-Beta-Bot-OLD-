const Discord = require("discord.js");
const client = new Discord.Client();
var ytitle;
var replyto;
var yourbank = 500;
var alreadye;
var host;
var epreview1;
var epreview2;
var charname;
var charbank;
var charstatpoints;
var charguild;
var yourweatherloc = 'blank';
var yourweather;
var voicechannel;
var yresults;
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();
var queue = 1;
var queue1 = 'empty';
var queue2 = 'empty';
var queue3 = 'empty';
var queue4 = 'empty';
var queue5 = 'empty';
var splayed = 0;
var toplay1;
var toplay2;
var toplay3;
var playing = 'no';
var thismessage;
var currentpos = 0;
var msgtoedit;
var globaleventname;
var globaleventd;
var goingtowar;
var gbank;
var oscore;
var dscore;
var ww;
var aw;
var gpower;
var o1 = 'none';
var o2 = 'none';
var o3 = 'none';
var o4 = 'none';
var o5 = 'none';
var o6 = 'none';
var o7 = 'none';
var o8 = 'none';
var o9 = 'none';
var o10 = 'none';
var iscook1 = false;
var iscook2 = false;
var iscook3 = false;
var iscook4 = false;
var iscook5 = false;
var s1;
var s2;
var s3;
var s4;
var s5;
var qbegin;
var current = 0;
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
//var five = require("johnny-five");
//var SerialPort = require("serialport").SerialPort;

//var SerialPort = require("serialport").SerialPort;
//var five = require("johnny-five");
//var board = new five.Board({ port: "COM1" });


//board.on("ready", function () {
 ///   var led = new five.Led(13);
//    led.blink(500);
//});
client.on('ready', () => {
    client.user.setUsername('C-Bot')
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
var position2 = 'empty';
var position3 = 'empty';
var position4 = 'empty';
var acckey;
var s = new Set();

require('events').EventEmitter.prototype._maxListeners = 100;

client.on('messageReactionAdd', (r, u) => {

    console.log(r.message.id)


    if (r.message.author.id === '341303112213987329') {

        if (position2 === 'empty') {
            if (u.username !== host) {
                position2 = u.username;
                console.log(u.username + " is postion 2");
                r.message.channel.fetchMessage(r.message.id)
                    .then(message => message.edit({
                        embed: {
                            color: 3447003,
                            author: {
                                name: client.user.username,
                                icon_url: client.user.avatarURL
                            },
                            title: globaleventname,

                            description: globaleventd,
                            fields: [{
                                name: 'Member 1: ' + host,
                                value: '___',
                            },
                            {
                                name: 'Member 2: ' + position2,
                                value: '___',
                            },
                            {
                                name: 'Member 3: ' + position3,
                                value: '___'
                            },
                            {
                                name: 'Member 4: ' + position4,
                                value: '___',
                            }
                            ],
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL,
                                text: "react to join!!!"
                            }
                        }
                    }));
            }
        }






        else {
            if (position3 === 'empty') {
                if (u.username !== position2) {
                    if (u.username !== host){
                        position3 = u.username;
                    console.log(u.username + " is postion 3");
                    r.message.channel.fetchMessage(msgtoedit)
                        .then(message => message.edit({
                            embed: {
                                color: 3447003,
                                author: {
                                    name: client.user.username,
                                    icon_url: client.user.avatarURL
                                },
                                title: globaleventname,

                                description: globaleventd,
                                fields: [{
                                    name: 'Member 1: ' + host,
                                    value: '___',
                                },
                                {
                                    name: 'Member 2: ' + position2,
                                    value: '___',
                                },
                                {
                                    name: 'Member 3: ' + position3,
                                    value: '___'
                                },
                                {
                                    name: 'Member 4: ' + position4,
                                    value: '___',
                                }
                                ],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: client.user.avatarURL,
                                    text: "react to join!!!"
                                }
                            }
                        }));
                }

            }
        }
            else {
                if (position4 === 'empty') {
                    if (u.username !== position2) {
                        if (u.username !== position3) {
                            if (u.username !== host) {
                                position4 = u.username;
                                console.log(u.username + " is postion 4");
                                r.message.channel.fetchMessage(msgtoedit)
                                    .then(message => message.edit({
                                        embed: {
                                            color: 3447003,
                                            author: {
                                                name: client.user.username,
                                                icon_url: client.user.avatarURL
                                            },
                                            title: globaleventname,

                                            description: globaleventd,
                                            fields: [{
                                                name: 'Member 1: ' + host,
                                                value: '___',
                                            },
                                            {
                                                name: 'Member 2: ' + position2,
                                                value: '___',
                                            },
                                            {
                                                name: 'Member 3: ' + position3,
                                                value: '___'
                                            },
                                            {
                                                name: 'Member 4: ' + position4,
                                                value: '___',
                                            }
                                            ],
                                            timestamp: new Date(),
                                            footer: {
                                                icon_url: client.user.avatarURL,
                                                text: "react to join!!!"
                                            }
                                        }
                                    }));
                            }
                        }
                    }
                }
                else {

                    console.log(u.username + " positions filled");
                }
            }
        }
    }
});
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
        client.user.setGame('drinking a 12 pack of Eggnog');
        msg.reply('god i drank one too many beers');
    };
    client.user.setGame('drinking a 12 pack of Eggnog');
    if (command === "-warnet") {

        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'War.net',

                description: 'Items Available',
                fields: [{
                    name: '1.Create A Faction ',
                    value: '$50,000',
                },
                {
                    name: '**Faction Owners:** ',
                    value: 'Only faction Owners can purchase these',
                },
                {
                    name: '________________________',
                    value: 'Purchasble Territory',
                },
                {
                    name: 'Buy Territory for your Faction!!',
                    value: '_______________________',
                },
                {
                    name: '2. New island Territory',
                    value: '$10,000',
                },
                {
                    name: '3. Small country ',
                    value: '$300,000',
                },
                {
                    name: '4. Country ',
                    value: '$600,000',
                },
                {
                    name: '5.Continent ',
                    value: '$50,000,000',
                },
                {
                    name: '__',
                    value: '__',
                },
                {
                    name: '**Defences and bases (Officers and up)** ',
                    value: 'Buy defences here',
                },
                {
                    name: '__ ',
                    value: '__',
                },
                {
                    name: '6.Aircraft Carrier',
                    value: '$1000',
                },
                {
                    name: '7.Airfield ',
                    value: '10,000',
                },
                {
                    name: '8.underground bunker ',
                    value: '$20,000',
                },
                {
                    name: '9.Hellicarrier ',
                    value: '$60,000',
                },
                {
                    name: '10.Fort ',
                    value: '$40,000',
                },
                {
                    name: '11.Head Quarters ',
                    value: '$100,000',
                },
                {
                    name: '__',
                    value: '__',
                },
                {
                    name: '**Units** (recruits and up) ',
                    value: 'Buy Unitys for your faction',
                },
                {
                    name: '__ ',
                    value: '__',
                },
                {
                    name: '12.Standard Infantry ',
                    value: '$150',
                },
                {
                    name: '12.Standard Infantry ',
                    value: '$150',
                },



                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris"
                }
            }
        });

    }
    if (command === "-hevent") {

        let eventname = args[0];

        let eventDescription = args.slice(1).join(" ");
        globaleventname = `${eventname}`;
        globaleventd = `${eventDescription}`;
        host = msg.author.username;
        epreview1 = `${eventname}`;
        epreview2 = `${eventDescription}`;
        position2 = 'empty';
        position3 = 'empty';
        position4 = 'empty';
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: `${eventname}`,

                description: `${eventDescription}`,
                fields: [{
                    name: 'Member 1: ' + host,
                    value: '___',
                },
                {
                    name: 'Member 2: ' + position2,
                    value: '___',
                },
                {
                    name: 'Member 3: ' + position3,
                    value: '___'
                },
                {
                    name: 'Member 4: ' + position4,
                    value: '___',
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "react to join!!!"
                }
            }
        }).then(m => {
            console.log(m.id);
            msgtoedit = m.id;

        })

        thismessage = msg.id;
        s.add(thismessage);
        currentpos++
        console.log(thismessage)




    }
    if (command === "-gwar") {
        goingtowar = msg.mentions.roles.first().id;
        //if ()






    }
    if (command === "-led12") {
        var led = new five.Led(12);
        led.blink(500);






    }
    if (command === "-ami") {
        var speng = msg.member.roles.has('388555462901235712')
        if (speng === true) {
            msg.channel.send('yes');
        }
        else {
            msg.channel.send('no');
        }






    }
    if (command === "-guild") {
        var hasGeneral = msg.member.roles.has('389155534495809537');
        var speng = msg.member.roles.has('388555462901235712');
        var asc = msg.member.roles.has('388557765305565184');
        var dem = msg.member.roles.has('388556263279165444');
        var the = msg.member.roles.has('388558467990028290');

        if (hasGeneral === true) {
            var yourposition = 'General';
        }
        else {
            yourposition = 'Recruit'
        }

        if (speng === true) {
            setTimeout(myFunction, 500)
            function myFunction() {

                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gbank = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'offencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    oscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    dscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'power' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gpower = data;
                    console.log(data);
                });
            }
            setTimeout(myFunction2, 600)
            function myFunction2() {


                msg.channel.send({


                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username + ' Rpg Guild Veiwer',
                            icon_url: client.user.avatarURL
                        },
                        title: 'Guild Veiwer',

                        description: 'your guild....',
                        fields: [{
                            name: 'Sp Engineering CO',
                            value: '_________________',
                        },
                        {
                            name: 'Guild Bank',
                            value: gbank + ' gold',
                        },
                        {
                            name: 'Guild Offensive Score',
                            value: oscore + ' points',
                        },
                        {
                            name: 'Guild Defensive Score',
                            value: dscore + ' points',
                        },
                        {
                            name: 'Guild Power',
                            value: gpower + ' power',
                        },

                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "Bot Owner: Chris "
                        }
                    }
                });
            }
        }
        if (asc === true) {
            setTimeout(myFunction, 500)
            function myFunction() {

                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'bank' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gbank = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'offencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    oscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    dscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'power' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gpower = data;
                    console.log(data);
                });
            }
            setTimeout(myFunction2, 600)
            function myFunction2() {


                msg.channel.send({


                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username + ' Rpg Guild Veiwer',
                            icon_url: client.user.avatarURL
                        },
                        title: 'Guild Veiwer',

                        description: 'your guild....',
                        fields: [{
                            name: 'The Ascendancy Of Guardians',
                            value: '_________________',
                        },
                        {
                            name: 'Guild Bank',
                            value: gbank + ' gold',
                        },
                        {
                            name: 'Guild Offensive Score',
                            value: oscore + ' points',
                        },
                        {
                            name: 'Guild Defensive Score',
                            value: dscore + ' points',
                        },
                        {
                            name: 'Guild Power',
                            value: gpower + ' power',
                        },

                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "Bot Owner: Chris "
                        }
                    }
                });
            }
        }
        if (dem === true) {
            setTimeout(myFunction, 500)
            function myFunction() {

                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gbank = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'offencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    oscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    dscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'power' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gpower = data;
                    console.log(data);
                });
            }
            setTimeout(myFunction2, 600)
            function myFunction2() {


                msg.channel.send({


                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username + ' Rpg Guild Veiwer',
                            icon_url: client.user.avatarURL
                        },
                        title: 'Guild Veiwer',

                        description: 'your guild....',
                        fields: [{
                            name: 'Order of Demons',
                            value: '_________________',
                        },
                        {
                            name: 'Guild Bank',
                            value: gbank + ' gold',
                        },
                        {
                            name: 'Guild Offensive Score',
                            value: oscore + ' points',
                        },
                        {
                            name: 'Guild Defensive Score',
                            value: dscore + ' points',
                        },
                        {
                            name: 'Guild Power',
                            value: gpower + ' power',
                        },

                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "Bot Owner: Chris "
                        }
                    }
                });
            }
        }
        if (the === true) {
            setTimeout(myFunction, 500)
            function myFunction() {

                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gbank = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'offencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    oscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    dscore = data;
                    console.log(data);
                });
                fs = require('fs')
                fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'power' + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    gpower = data;
                    console.log(data);
                });
            }
            setTimeout(myFunction2, 600)
            function myFunction2() {


                msg.channel.send({


                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username + ' Rpg Guild Veiwer',
                            icon_url: client.user.avatarURL
                        },
                        title: 'Guild Veiwer',

                        description: 'your guild....',
                        fields: [{
                            name: 'The Reorganized Reich of Normaticarole',
                            value: '_________________',
                        },
                        {
                            name: 'Guild Bank',
                            value: gbank + ' gold',
                        },
                        {
                            name: 'Guild Offensive Score',
                            value: oscore + ' points',
                        },
                        {
                            name: 'Guild Defensive Score',
                            value: dscore + ' points',
                        },
                        {
                            name: 'Guild Power',
                            value: gpower + ' power',
                        },

                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL,
                            text: "Bot Owner: Chris "
                        }
                    }
                });
            }
        }
    }
    if (command === "-ggbuy2") {
        var theroles = msg.member.roles.map(r => r.name);
        var hasid = msg.member.roles.has('389155534495809537');
        if (hasid === true) {

            var speng = msg.member.roles.has('388555462901235712');
            var asc = msg.member.roles.has('388557765305565184');
            var dem = msg.member.roles.has('388556263279165444');
            var the = msg.member.roles.has('388558467990028290');
        }


        if (speng === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 10000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 10000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if ( dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 1000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (asc === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + 'is388557765305565184' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 10000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 10000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 1000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (dem === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 10000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 10000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 1000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (the === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 10000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 10000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 1000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        else { msg.channel.send('You are not a faction General') }
    }
    if (command === "-ggbuy3") {
        var theroles = msg.member.roles.map(r => r.name);
        var hasid = msg.member.roles.has('389155534495809537');
        if (hasid === true) {

            var speng = msg.member.roles.has('388555462901235712');
            var asc = msg.member.roles.has('388557765305565184');
            var dem = msg.member.roles.has('388556263279165444');
            var the = msg.member.roles.has('388558467990028290');
        }


        if (speng === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 300000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 300000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 30000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (asc === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + 'is388557765305565184' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 300000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 300000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 30000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (dem === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 300000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 300000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 30000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (the === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 300000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 300000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 30000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        else { msg.channel.send('You are not a faction General') }
    }
    if (command === "-ggbuy4") {
        var theroles = msg.member.roles.map(r => r.name);
        var hasid = msg.member.roles.has('389155534495809537');
        if (hasid === true) {

            var speng = msg.member.roles.has('388555462901235712');
            var asc = msg.member.roles.has('388557765305565184');
            var dem = msg.member.roles.has('388556263279165444');
            var the = msg.member.roles.has('388558467990028290');
        }


        if (speng === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 600000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 600000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 61000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (asc === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + 'is388557765305565184' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 600000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 600000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 61000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (dem === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 600000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 600000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 61000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (the === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 600000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 600000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 61000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        else { msg.channel.send('You are not a faction General') }
    }
    if (command === "-ggbuy5") {
        var theroles = msg.member.roles.map(r => r.name);
        var hasid = msg.member.roles.has('389155534495809537');
        if (hasid === true) {

            var speng = msg.member.roles.has('388555462901235712');
            var asc = msg.member.roles.has('388557765305565184');
            var dem = msg.member.roles.has('388556263279165444');
            var the = msg.member.roles.has('388558467990028290');
        }


        if (speng === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 50000000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 50000000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 5065000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388555462901235712' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (asc === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + 'is388557765305565184' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 50000000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 50000000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 5065000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388557765305565184' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (dem === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 50000000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 50000000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 5065000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388556263279165444' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        if (the === true) {
            fs = require('fs')


            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                console.log(data);
                gbank = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (gbank >= 50000000) {
                        console.log(msg.author + " has bought item num 1");
                        gbank / 1;
                        var num1 = gbank - 50000000;
                        gbank = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            fs.readFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }


                console.log(data);
                dscore = (data);
                setTimeout(myFunction, 500)
                function myFunction() {


                    if (dscore >= 0) {
                        console.log(msg.author + " has bought item num 1");
                        dscore / 1;
                        var num1 = dscore + 5065000;
                        dscore = num1;
                    }

                    else {
                        msg.channel.send(` Insufficent funds`)
                    }
                }
            });
            setTimeout(myFunction2, 1000)
            function myFunction2() {


                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'bank' + ".txt", gbank, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + '388558467990028290' + 'defencescore' + ".txt", dscore, function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("The file was saved!");

                });
            }
        }
        else { msg.channel.send('You are not a faction General') }
    }








    
    
    if (command === "-greg") {
        if (msg.author.id === Developer) {

            let gtoreg = args.slice(0).join(" ");
            var fs = require('fs');
            gbank = 100000;
            ww = 'none';
            aw = 'none';
            oscore = 0;
            dscore = 0;
            gpower = 0;
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'bank' + ".txt",gbank, function (err) {
                if (err) {
                    return console.log(err);
                }

                

                console.log("The file was saved!");
            });
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'atwarwith' + ".txt", ww, function (err) {
                if (err) {
                    return console.log(err);
                }



                console.log("The file was saved!");
            });
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'allies' + ".txt", aw, function (err) {
                if (err) {
                    return console.log(err);
                }



                console.log("The file was saved!");
            });
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'defencescore' + ".txt", dscore, function (err) {
                if (err) {
                    return console.log(err);
                }



                console.log("The file was saved!");
            });
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'offencescore' + ".txt", oscore, function (err) {
                if (err) {
                    return console.log(err);
                }



                console.log("The file was saved!");
            });
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + gtoreg + 'power' + ".txt", gpower, function (err) {
                if (err) {
                    return console.log(err);
                }



                console.log("The file was saved!");
            });






        }
    }
    if (command === "-getid") {
        if (msg.author.id === Developer) {
            var rin = msg.mentions.roles.first().name;
          var rid =  msg.mentions.roles.first().id;
          client.channels.get('389158614557917194').send('The Id of the '  + rin + 'role is' + rid);
            


        }


       



    }
   
    if (command === "-event") {
        msg.delete()
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: epreview1,

                description: epreview2,
                fields: [{
                    name: 'Member 1: ' + host,
                    value: '___',
                },
                {
                    name: 'Member 2: ' + position2,
                    value: '___',
                },
                {
                    name: 'Member 4: ' + position3,
                    value: '___'
                },
                {
                    name: 'Member 5: ' + position4,
                    value: '___',
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "use -ejoin to join"
                }
            }
        });


    }
    if (command === "-ereset") {

        if (msg.author.id === Developer) {


            alreadye = 0;
            position2 = 'empty';
            position3 = 'empty';
            position4 = 'empty';
        }
    }
    if (command === "-ejoin") {
        if (position2 === 'empty') {
            position2 = msg.author.username;
            msg.reply(' your postion 2');
        }
        else {
            if (position2 === 'empty') {
                position2 = msg.author;
                msg.reply(' your postion 2');
            }
            else {
                if (position3 === 'empty') {
                    position3 = msg.author;
                    msg.reply(' your postion 3');}
                else {
                    if (position4 === 'empty') {
                        position4 = msg.author;
                        msg.reply(' your postion 4');}
                    else {
                        msg.channel.send('sorry all slots filled');
                    }
                }
            }
        }

    }





    if (command === "-buy 10") {
        if (msg.author.id === Developer) {
            cbank -= 50000;
            if (citem1 === ' ') {
                citem1 = 'Personal bot token.'
            };


        }
    }
    if (command === "-leave") {
        if (msg.author.id === Developer) {
            msg.guild.leave();


        }
    }
    if (command === "-devset") {
        if (msg.author.id === Developer) {
            let devset = args.slice(0).join(" ");
            yourbank = `${devset}`
            var fs = require('fs');
            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });



        }
    }

    if (command === "-bankreg") {
        yourbank = 500
        var fs = require('fs');
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
    if (command === "-wreg") {
        let wlocation = args.slice(0).join(" ");
        var fs = require('fs');
        yourweatherloc = `${wlocation}`
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + "wloc" + ".txt", yourweatherloc, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }
    if (command === "-wcheck") {
        
        var fs = require('fs');
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "wloc" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
            yourweatherloc = data;
        });
        let options = {
            zip: yourweatherloc,
            DarkSkyKey: `caf2e03bdc2d43446dbd72a8d8d6091d`,
            ZipCodeApiKey: `43cZq62iZ7PzYzOFcUCEfQ0857d9WR4rQek0a6fL7j0MTrjx287RxsoWBgIbyJu9`
        };
        const getTheWeather = require("get-the-weather");

        getTheWeather(options).then(result => console.log(result));
        //yourweather = result.currently.temperature;
       // msg.channel.send(yourweather)
    }
    if (command === "-rpgreg") {
        charname = msg.author.username;
        charstatpoints = 5;
        charguild = 'None'
        charbank = '500'
        var fs = require('fs');
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + "charactername" + ".txt", charname, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The charachter name file For " + msg.author.username + " has been created!!!");
        })
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + "characterbank" + ".txt", charbank, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The charachter bank file For " + msg.author.username + " has been created!!!");
        })
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + "characterpoints" + ".txt", charstatpoints, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The charachter stat points file For " + msg.author.username + " has been created!!!");
        })
        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + "characterguild" + ".txt", charguild, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The charachter Guild file For " + msg.author.username + " has been created!!!");
        })
        msg.channel.send('Your Charachter **' + msg.author.username + '** was created!!!')
    }





    if (command === "-balance") {
        fs = require('fs')
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            msg.channel.send(`Your balance is: ` + data + '$');
            console.log(data);
        });
    }
    if (command === "-beginstory") {
        fs = require('fs');
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "charactername" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charname = (data);
            console.log(data);
            msg.guild.channels.get('380904229700632578').send('The flight back to Quebec was quiet, silent... most of the passengers were alseep at this point, and night had already set....')
            setTimeout(myFunction, 3000)
            function myFunction() {
                client.channels.get('380904229700632578').send('*The News on the TV in front of me tells of sudden a drop in stock prices, and inflation of US currency over the period of a week..*');
                setTimeout(storypart2, 3000)
                function storypart2() {
                    client.channels.get('380904229700632578').send('*Suddenly, the in-cabin PA system buzzes to life An emergency landing is in effect. Passengers brace. Brace brace....*');
                    setTimeout(storypart3, 3000)
                    function storypart3() {
                        client.channels.get('380904229700632578').send('*A violent shaking overtakes the plane as air masks drop from above. Several other passengers awake, some begin to scream and panic, rushing up from their chairs and to the front of the plane*');
                        setTimeout(storypart4, 3000)
                        function storypart4() {
                            client.channels.get('380904229700632578').send('*Looking out the window to the left, a small flame can be seen blazing from the furthest engine, followed by the entire engine ripping off*');
                            setTimeout(storypart5, 3000)
                            function storypart5() {
                                client.channels.get('380904229700632578').send('*The ground was getting closer, followed by you blacking out after the tail ripped off from excessive Gs*');
                                setTimeout(storypart6, 3000)
                                function storypart6() {
                                    client.channels.get('380904229700632578').send('*You awake, day breaking over the tall pine trees. Still strapped into the chair, hearing cracking and thuds from the airplane crash. You do not see any other survivors, and you appear untouched from the crash besides a few scratches*');
                                    setTimeout(storypart7, 3000)
                                    function storypart7() {
                                        client.channels.get('380904229700632578').send('*You unbuckle from the chair, and get up. Everyone in the cabin with you was dead, and the cockpit of the plane is missing. All that could be scavenged were a small medical kit, and several articles of clothing...*');
                                        setTimeout(storypart8, 3000)
                                        function storypart8() {
                                            client.channels.get('380904229700632578').send('*The adventure starts here, in the wilderness of Canada, south of Quebecs outskirts...*');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        
            


        });
    }
    if (command === "-me") {
        fs = require('fs')
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "charactername" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charname = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterbank" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charbank = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterpoints" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charstatpoints = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterguild" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            
            console.log(data);
            charguild = (data);
        });
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username + ' Rpg Profile',
                    icon_url: client.user.avatarURL
                },
                title: charname ,

                description: '_______',
                fields: [{
                    name: 'Character Name:',
                    value: 'Player: ' + charname  ,
                },
                {
                    name: 'Character Bank',
                    value: charbank + ' gold',
                },
                {
                    name: 'Character Stat Points',
                    value: charstatpoints + ' points',
                },
                {
                    name: 'Character Guild',
                    value: charguild ,
                },
                
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris "
                }
            }
        });
    }
    if (command === "-rpgload") {
        fs = require('fs')
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "charactername" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charname = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterbank" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charbank = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterpoints" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            charstatpoints = (data);
            console.log(data);
        });
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + "characterguild" + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
            charguild = (data);
        });
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username + ' Rpg Profile',
                    icon_url: client.user.avatarURL
                },
                title: charname + " Charachter",

                description: '_______',
                fields: [{
                    name: 'Charachter Name:',
                    value:  charname,
                },
                {
                    name: 'Charachter Bank',
                    value: charbank ,
                },
                {
                    name: 'Charachter Stat Points',
                    value: charstatpoints,
                },
                {
                    name: 'Charachter Guild',
                    value: charguild  ,
                },

                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris "
                }
            }
        });
    }
    if (command === "-bal") {
        fs = require('fs')
        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            msg.channel.send(`Your balance is: ` + data + '$');
            console.log(data);
        });
    }
    if (command === "-purchase1") {
        fs = require('fs')


        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
            yourbank = (data);
            setTimeout(myFunction, 500)
            function myFunction() {


                if (yourbank >= 50000) {
                    console.log(msg.author + " has bought item num 1");
                    yourbank / 1;
                    var num1 = yourbank - 50000;
                    yourbank = num1;
                }

                else {
                    msg.channel.send(` Insufficent funds`)
                }
            }
            });
        setTimeout(myFunction2, 1000)
        function myFunction2() {
            

            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");

            });
        }
    
    }
    if (command === "-daily") {
        fs = require('fs')


        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            console.log(data);
            yourbank = (data);
            setTimeout(myFunction, 500)
            function myFunction() {
                yourbank / 1;
                var num1 = yourbank - -10000;
                yourbank = num1;

                
            }
        });
        setTimeout(myFunction2, 1000)
        function myFunction2() {


            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id+ ".txt", yourbank, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved for!" + msg.author.username + "'s daily");

            });
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
    if (command === "-kick") {
        var ismod = msg.member.roles.has('346389461271314434');
        if (msg.author.id === Developer) {
            let targetpractice = args[0];
            let reason = args.slice(1).join(" ");
            msg.channel.send(`the target has been kicked for  ${reason}`);
            var target = msg.mentions.members.first();

            target.kick( `${reason}`);

        };


    }
    if (command === "-trade") {
       
        
            let targetpractice = args[0];
            let details = args.slice(1).join(" ");
            
            var target = msg.mentions.members.first();
            console.log(msg.author.username + "-" + target.user.username)
             msg.guild.createChannel(msg.author.username + "-and-" + target.user.username, 'text')
                .then(channel =>  {
                    
                        console.log(channel.id)

                        client.channels.get(channel.id).overwritePermissions(msg.author, {
                            SEND_MESSAGES: true,
                            READ_MESSAGES: true
                        })
                            .then(() => console.log('Done!'))
                            .catch(console.error);
                        client.channels.get(channel.id).overwritePermissions(target.user, {
                            SEND_MESSAGES: true,
                            READ_MESSAGES: true
                        })

                            .then(() => console.log('Done!'))
                            .catch(console.error);
                        client.channels.get(channel.id).overwritePermissions(msg.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        })
                            .then(() => console.log('Done!'))
                            .catch(console.error);
                        
                    })
                .catch(console.error);
        
            client.channels.get('400847499008409614').send({
                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: 'Trade Bot Middle Man Trade',

                    description: 'Trade Between ' + msg.author + " and " + target,
                    fields: [{

                        name: 'What is being Traded: ',
                        value: details,
                    },



                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "Bot Owner: Chris "
                    }
                }
        });

            
            


    }
    if (command === "-endtrade") {


        msg.channel.delete()

    }
    if (command === "-ban") {
        if (msg.author.id === Developer) {
            let targetpractice = args[0];
            let reason = args.slice(1).join(" ");
            msg.channel.send(`the target has been banned for ${reason}`);
            var target = msg.mentions.members.first();

            target.ban( `${reason}`);

        };


    }
    if (command === "-grole") {
        if (msg.author.id === Developer) {
            
            let reason = args.slice(1).join(" ");
            msg.channel.send(`the target has been added to the role: ${reason}`);
            var target = msg.mentions.members.first();

           
            target.addRole(msg.mentions.roles.first(), "User was added to role");

        };


    }
    if (command === "-rrole") {
        if (msg.author.id === Developer) {

            let reason = args.slice(1).join(" ");
            msg.channel.send(`the target has been added to the role: ${reason}`);
            var target = msg.mentions.members.first();


            target.removeRole(msg.mentions.roles.first(), "User was removed from role");

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


            
         }).then(content =>  msg.channel.send(new Discord.RichEmbed()
             .setTitle(`${username} ` + "'s " + " Profile")
             .setAuthor(content.name, content.pic2)
             /*
              * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
              */
             .setColor(0x00AE86)
             .setDescription(content.bio + "This user has " + content.joined)
             .setFooter("Generated By: C-Bot", )
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
    if (command === "-spadvertise") {
        let post = args[0];
        let screenshot = args[1];
        let stuff;
        let username = args.slice(0).join(" ");
        console.log(post)
        // Scrape Warbrines's profile
        scrapeIt(`${post}`, {
            name: "body > div.body > div > div > section > div > div > div.col-md-8 > h2 > strong"
            , bio: "body > div.body > div > div > div:nth-child(2) > div:nth-child(2) > div > div.airplane-description > p",
            posted: "body > div.body > div > div > section > div > div > div.col-md-8 > div > span:nth-child(3)",
            



        }
        ).then(content => msg.channel.send(new Discord.RichEmbed()
            .setTitle(content.name)
            .setAuthor(content.name, screenshot)
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription('**The Biography of this craft:** ' + content.bio + " **This Craft was Posted** " + content.posted)
            .setFooter("Generated By: C-Bot", )
            .setImage(screenshot)
            .setThumbnail(screenshot)
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
            .addField("**Craft link:**", post , true)

            .addBlankField(true)
            .addField("__________", "_", true)).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-sr") {


        let stuff;
        let username = args.slice(0).join(" ");
        var ulink = `https://simplerockets.com/U/${username}`
        var pointamn;
        // Scrape Warbrines's profile
        scrapeIt(`https://simplerockets.com/U/${username}`, {
            name: "body > div.body > div > section > div > div > div > h1",
            points: "body > div.body > div > section > div > div > div > div.pull-left > span"
            , bio: "body > div.body > div > div > div > div.col-md-6.col-sm-12.col-xs-12 > div > p",
            joined: "body > div.body > div > div > div > div.col-md-2 > div:nth-child(1) > h5",
            pic1: ".col-md-3",
            pic2: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-3 > img>src",
             



        }).then(content =>
           
            msg.channel.send(new Discord.RichEmbed()
            .setTitle("[" + content.points  + " Points" + "] " + `${username} ` + "'s " + " Profile")
            .setAuthor(content.name, content.pic2)
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription(content.bio + "This user has " + content.joined)
            .setFooter("Generated By: C-Bot", )
            .setImage(content.pic1)
            .setThumbnail("https://jundroo.blob.core.windows.net/simplerockets/Content/logo.png")
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
            .addField("Member Since:", content.joined, true)
            .addField("Profile Link", ulink, true)

            .addBlankField(true)
            .addField("__________", "_", true)).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-srforums") {


        let stuff;
        let username = args.slice(0).join(" ");
        var ulink = `https://simplerockets.com/U/${username}`
        var pointamn;
        // Scrape Warbrines's profile
        scrapeIt(`https://simplerockets.com/U/${username}`, {
            name: "body > div.body > div > section > div > div > div > h1",
            points: "body > div.body > div > section > div > div > div > div.pull-left > span"
            , bio: "body > div.body > div > div > div > div.col-md-6.col-sm-12.col-xs-12 > div > p",
            joined: "body > div.body > div > div > div > div.col-md-2 > div:nth-child(1) > h5",
            pic1: ".col-md-3",
            pic2: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-3 > img>src",




        }).then(content =>

            msg.channel.send(new Discord.RichEmbed()
                .setTitle("[" + content.points + " Points" + "] " + `${username} ` + "'s " + " Profile")
                .setAuthor(content.name, content.pic2)
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription(content.bio + "This user has " + content.joined)
                .setFooter("Generated By: C-Bot", )
                .setImage(content.pic1)
                .setThumbnail("https://jundroo.blob.core.windows.net/simplerockets/Content/logo.png")
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
                .addField("Member Since:", content.joined, true)
                .addField("Profile Link", ulink, true)

                .addBlankField(true)
                .addField("__________", "_", true)).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
    if (command === "-dkd") {


        let stuff;
        let dusername = args.slice(0).join(" ");
        var ulink = `http://www.destinykd.com/d2/xb/${dusername}`;
        // Scrape Warbrines's profile
        scrapeIt("http://www.destinykd.com/d2/xb" + "/" + dusername , {
            name: "#container > div.characters > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > font"
            , pvpkd: "#container > div.characters > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > b",
            kills: "#container > div.characters > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td:nth-child(3) > font.activities-main",
            trialswins: "#app > div.overview > div.stats-box > div:nth-child(3) > div.dtr-stats-card.gt-pvp-competitive.has-detail > div.trn-card > div > div:nth-child(3) > div.stat-block > div:nth-child(7) > span.value",
            pic2: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-3 > img>src"



        }).then(content => msg.channel.send(new Discord.RichEmbed()
            .setTitle( content.name + "'s " + " Profile")
            .setAuthor(content.name, " ")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription( "This user has a  " + content.pvpkd)
            .setFooter("Generated By: C-Bot", )
            .setImage("http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/04/destiny_2_release_date_news_specs_features.jpg?itok=fjCGp_Nn")
            .setThumbnail("http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/04/destiny_2_release_date_news_specs_features.jpg?itok=fjCGp_Nn")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addField("Profile Link", ulink, true)

            .addBlankField(true)
            .addField("__________", "_", true)).catch(console.error));


        // =>
        // { name: 'Emanuela Colta',
        //   bio: 'Junior Full-Stack Web Developer | ...' }
    }
     if (command === "-wstats") {


        let stuff;
        let dusername = args.slice(0).join(" ");
        var ulink = `http://www.destinykd.com/d2/xb/${dusername}`;
        // Scrape Warbrines's profile
        scrapeIt("http://www.destinykd.com/d2/xb" + "/" + dusername , {
            name: "#container > div.characters > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > font"
            , pvpkd: "#container > div.characters > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > b",
            kills: "#container > div.characters > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td:nth-child(3) > font.activities-main",
            trialswins: "#app > div.overview > div.stats-box > div:nth-child(3) > div.dtr-stats-card.gt-pvp-competitive.has-detail > div.trn-card > div > div:nth-child(3) > div.stat-block > div:nth-child(7) > span.value",
            pic2: "body > div.body > div > div > div > div:nth-child(1) > div.col-md-3 > img>src"



        }).then(content => msg.channel.send(new Discord.RichEmbed()
            .setTitle( content.name + "'s " + " Profile")
            .setAuthor(content.name, " ")
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            .setDescription( "This user has a  " + content.pvpkd)
            .setFooter("Generated By: C-Bot", )
            .setImage("http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/04/destiny_2_release_date_news_specs_features.jpg?itok=fjCGp_Nn")
            .setThumbnail("http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/04/destiny_2_release_date_news_specs_features.jpg?itok=fjCGp_Nn")
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            
            /*
             * Inline fields may not display as inline if the thumbnail and/or image is too big.
             */
            .addField("Profile Link", ulink, true)

            .addBlankField(true)
            .addField("__________", "_", true)).catch(console.error));


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

                description: 'Mostly complete documentation on available commands and how to use!!',
                fields: [{

                    name: '-sptournament ',
                    value: 'see latest simple planes tournament and enter',
                },

                {
                    name: '-spuser',
                    value: '-spuser (username)',
                    },
                {
                    name: '-spadvertise',
                    value: '-spadvertise (craft link) (screenshot of craft link)',
                },
                {
                    name: '**utility**',
                    value: "Utilities for use",
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
                    name: '**Fun**',
                    value: "these commands are for only staff of servers",
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
                    name: '**Contact**',
                    value: "need help?",
                },
                {
                    name: '-feedback',
                    value: '-feedback (your feedback)',
                },
                {
                    name: '-support',
                    value: '-support (your issue)',
                },
                {
                    name: '**Banking**',
                    value: "Wana make some bank",
                },
                {
                    name: '-bankreg (registers you a bank account)',
                    value: '-bankreg',
                },
                {
                    name: '**Matchmaking**',
                    value: "Match make and find people playing your game",
                },
                {
                    name: '-event (checks for current events for matchmaking)',
                    value: '-event',
                },
                {
                    name: '**Offical**',
                    value: "Offical stuff that deals with bot",
                },
                {
                    name: '-hub (Discord join invite for bot hub)',
                    value: '-hub',
                },
                {
                    name: '-partners',
                    value: "The Bot's partners",
                },
                {
                    name: '**Music**',
                    value: "its music what else more to say",
                },
                {
                    name: '-play (must be in a vc)',
                    value: "-play (song name)",
                },
                {
                    name: '**Staff Only**',
                    value: "these commands are for only staff of servers",
                },
                {
                    name: '-kick',
                    value: "-kick (user) (reason)",
                },
                
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Bot Owner: Chris "
                }
            }
        });
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Page 2',

                description: '________',
                fields: [{

                    name: '-ban',
                    value: "-ban (user) (reason)",
                },
                    {
                        name: '-grole',
                        value: "-grole (user) (role mention)",
                    },
                    {
                        name: '-nick',
                        value: "-nick (user) (new name)",
                    },
                    {
                        name: '-------------------',
                        value: "Simple Rockets",
                    },
                    {
                        name: '-sr',
                        value: "-sr (user)",
                    },
                    {
                        name: '-------------------',
                        value: "Music",
                    },
                    {
                        name: '-play',
                        value: "Song Name",
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
    if (command === "-Partners") {
        msg.channel.send({


            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Partners with our bot',

                description: 'These are the offical Bot Partners',
                fields: [{
                    name: 'None ',
                    value: 'none',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None'
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
                },
                {
                    name: 'None',
                    value: 'None',
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
            .setFooter("Generated By: C-Bot", )
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
    if (command === "-spforums") {

        var hottesttopic;
        var hottestlink


        // Scrape Warbrines's profile
        scrapeIt(`https://www.simpleplanes.com/Forums/Hot/0`, {
            name: "body > div.body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > a.forum-title-link > h4"
           




        }).then(content => hottesttopic = content.name);
        scrapeIt(`https://www.simpleplanes.com/Forums/Hot/0`, {
            link: "body > div.body > div > div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > a.forum-title-link"





        }).then(content => hottestlink = 'https://www.simpleplanes.com' + content.link);
        if (!hottesttopic) {
            msg.reply('Error retreiving the forums')
        }
        else {
            msg.channel.send(new Discord.RichEmbed()
                .setTitle(`The latest of the Sp Forums`)
                .setAuthor(msg.author.username, 'https://www.simpleplanes.com/Content/img/logo.png')
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription("Topics:")
                .setFooter("Generated By: C-Bot", )
                .setImage('https://jundroo.blob.core.windows.net/simpleplanes/Blog/Images/9JTlOrR.png')
                .setThumbnail("https://jundroo.blob.core.windows.net/simpleplanes/Blog/Images/9JTlOrR.png")
                /*
                 * Takes a Date object, defaults to current date.
                 */
                .setTimestamp()
                .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
                .addField("Hottest",
                hottesttopic)
                /*
                 * Inline fields may not display as inline if the thumbnail and/or image is too big.
                 */
                .addField("Tournament Entry", "https://www.simpleplanes.com/Tournaments", true)

                .addBlankField(true)
                .addField("__________", "_", true)).catch(console.error)

            // =>
            // { name: 'Emanuela Colta',
            //   bio: 'Junior Full-Stack Web Developer | ...' }
        }
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
    if (command === "-dxstats") {
        let tocollect = args.slice(0).join(" ");
        var urlToImage = require('url-to-image');

        var options = {
            width: 1920,
            height: 900,
            // Give a short time to load additional resources 
            requestTimeout: 100
        }

        urlToImage('http://www.destinykd.com/d2/xb' +'/' + tocollect,'C:\Users\User\Documents\Visual Studio 2017\Projects\NodejsWebApp2'+ '/' + tocollect + '.png', options)
            .then(function () {
                console.log('I have logged he stats for ' + tocollect)
            })
            .catch(function (err) {
                console.error(err);
            });
        msg.channel.send({ files: ['C:\Users\User\Documents\Visual Studio 2017\Projects\NodejsWebApp2' + '/' + tocollect + '.png'] });
    }
    if (command === "-dxstatsm") {
        let tocollect = args.slice(0).join(" ");
        var urlToImage = require('url-to-image');

        var options = {
            width: 1200,
            height: 800,
            // Give a short time to load additional resources 
            requestTimeout: 100
        }

        urlToImage('http://www.destinykd.com/d2/xb' + '/' + tocollect, 'C:\Users\User\Documents\Visual Studio 2017\Projects\NodejsWebApp2' + '/' + tocollect + '.png', options)
            .then(function () {
                console.log('I have logged he stats for ' + tocollect)
            })
            .catch(function (err) {
                console.error(err);
            });
        msg.channel.send({ files: ['C:\Users\User\Documents\Visual Studio 2017\Projects\NodejsWebApp2' + '/' + tocollect + '.png'] });
    }
    if (command === "-cookieme") {
        if (msg.author.id === Developer) {
            msg.channel.send('Heres a whole fucking dump truck sir');
            msg.channel.send('oh and incase thats not enough i brought the cookies i stole from kds.');
            console.log('cookie sent to master')
        }
    }
    if (command === "-cookieme") {
        if (msg.author.id === Developer) {
            msg.channel.send('Heres a whole fucking dump truck sir');
            msg.channel.send('oh and incase thats not enough i brought the cookies i stole from kds.');
            console.log('cookie sent to master')
        }
    }

    
    if (command === "-vcl") {
        voicechannel = msg.member.voiceChannel;
        voicechannel.leave();
            
    }
    if (command === "-qadd") {
        let yoursearch = args.slice(0).join(" ");
        var search = require('youtube-search');
        voicechannel = msg.member.voiceChannel;

        var opts = {
            maxResults: 1,
            key: 'AIzaSyDZIpN6lPvQsTOKMeG7uJrXIGt0KEx3rQc'
        };
        console.log(yoursearch)

        search(yoursearch, opts, function (err, results) {
           


                if (err) return console.log(err);
                yresults = results[0].link;
            console.log(yresults)



                console.dir(yresults);
            
        });
        const stream = ytdl(yresults, { filter: 'audioonly' });
       


            if (s1 === undefined) {
                s1 = stream;
                msg.reply('your song #1');
                console.log('song #1 set')
            }
            else {
                if (s2 === undefined) {
                    if (s2 !== s1) {
                        s2 = stream;
                        msg.reply('your song #2');
                        console.log('song #2 set')
                    }

                }
                else {
                    if (s3 === undefined) {
                        if (s3 !== s2) {
                            if (s3 !== s1) {
                                s3 = stream;
                                msg.reply('your song #3');
                                console.log('song #3 set')
                            }
                        }
                    }
                    else {
                        if (s4 === undefined) {
                            if (s4 !== s3) {
                                if (s4 !== s2) {
                                    if (s4 !== s1) {
                                        s4 = stream;
                                        msg.reply('your song #4');
                                        console.log('song #4 set')
                                    }
                                }
                            }
                        }
                        else {
                            if (s5 === undefined) {
                                if (s5 !== s4) {
                                    if (s5 !== s3) {
                                        if (s5 !== s2) {
                                            if (s5 !== s1) {
                                                s5 = stream;
                                                msg.reply('your song #5');
                                                console.log('song #5 set')
                                            }
                                        }
                                    }
                                }

                            }
                            else {
                                msg.reply('Sorry we have reached the maximum amount of songs in the queue')
                            }
                        }
                    }

                }
        }
            setTimeout(myFunction, 10000)
            function myFunction() {
                client.channels.get('373258944560234496').send('Order number 1 is now cooked');

                qbegin = '1'
                console.log('music player enabled')

                current = 1;
            }
    }
    if (command === "-play") {
        let yoursearch = args.slice(0).join(" ");
        voicechannel = msg.member.voiceChannel;
        client.createVoiceBroadcast();
        var search = require('youtube-search');

        var opts = {
            maxResults: 1,
            key: 'AIzaSyDZIpN6lPvQsTOKMeG7uJrXIGt0KEx3rQc'
        };

        search(`${yoursearch}`, opts, function (err, results) {
            if (err) return console.log(err);
            yresults = results[0].link;
            console.log(yresults)
            
            
        
            console.dir(yresults);
            
        });
        if (!voicechannel) {
            msg.reply('you are not in a voice channel')
        }
        else {
            voicechannel.join()

                .then(connection => {
                    const stream = ytdl(yresults, { filter: 'audioonly' });
                    broadcast.playStream(stream);
                    const dispatcher = connection.playBroadcast(broadcast);
                    var opts = {
                        maxResults: 1,
                        key: 'AIzaSyDZIpN6lPvQsTOKMeG7uJrXIGt0KEx3rQc'
                    };
                    


                })
        }
        
    }

    while (qbegin === '1') {
        let yoursearch = args.slice(0).join(" ");
        voicechannel = msg.member.voiceChannel;
        client.createVoiceBroadcast();
        var search = require('youtube-search');
        
        const stream = ytdl(yresults, { filter: 'audioonly' });
        
        var opts = {
            maxResults: 1,
            key: 'AIzaSyDZIpN6lPvQsTOKMeG7uJrXIGt0KEx3rQc'
        };
        if (current === 1) {
            if (s1 !== undefined) {
                broadcast.playStream(s1);
            }
        }
        if (current === 2) {
            if (s2 !== undefined) {
                broadcast.playStream(s2);
            }
        }
        if (current === 3) {
            if (s3 !== undefined) {
                broadcast.playStream(s3);
            }
        }
        if (current === 4) {
            if (s4 !== undefined) {
                broadcast.playStream(s4);
            }
        }
        if (current === 5) {
            if (s5 !== undefined) {
                broadcast.playStream(s5);
            }
        }
    }
    if (command === "-ud") {
        var urban = require('urban');
        let ubdone = args.slice(0).join(" ");
        try {
            
            trollface = urban(`${ubdone}`);

            trollface.first(function (json) {
                if (!json) {
                    msg.reply('That is not a known word in urban..');
                }
                else {
                    console.log(json);
                    var word = json.word;
                    var def = json.definition;
                    msg.channel.send('Word: ' + word);
                    msg.channel.send('Definitions: ' + def);
                }
            })
        }
        catch (json) {
            word = 'Word not found'
            msg.reply('Word not found... :(');
        }
    


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
        
            
        msg.channel.send('**1:** ' + o1 + ' ' + '**2:** ' + o2 + ' ' + '**3:** ' + o3 + ' ' + '**4:** ' + o4 + ' ' + '**5:** ' + o5  );
        
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
            client.channels.get('373258944560234496').send(msg.author + " has ordered: " + `${order}` + " **From: **" + msg.guild + "** invite: ** " + invite.url));
        if (o1 === 'none') {
            o1 = order;
            msg.reply('your order #1');
        }
        else {
            if (o2 === 'none') {
                if (o2 !== o1) {
                    o2 = order;
                    msg.reply('your order #2');

                }
                
            }
            else {
                if (o3 === 'none') {
                    if (o3 !== o2) {
                        if (o3 !== o1) {
                            o3 = order;
                            msg.reply('your order #3');
                        }
                    }
                }
                else {
                    if (o4 === 'none') {
                        if (o4 !== o3) {
                            if (o4 !== o2) {
                                if (o4 !== o1) {
                                    o4 = order;
                                    msg.reply('your order #4');
                                }
                            }
                        }
                    }
                    else {
                        if (o5 === 'none') {
                            if (o5 !== o4) {
                                if (o5 !== o3) {
                                    if (o5 !== o2) {
                                        if (o5 !== o1) {
                                            o5 - order;
                                            msg.reply('your order #5');
                                        }
                                    }
                                }
                            }

                        }
                        else {
                            msg.reply('Sorry we have reached the maximum amount of orders, order again soon')
                        }
                    }
                }

            }
        }

       
    }
    
    if (command === "-cook") {

        var cancook = msg.member.roles.has('380211389534568450');
        if (cancook === true) {
            if (o1 !== 'none') {
                if (o6 !== 'full') {
                    o1 = 'cooking: ' + o1;
                    o6 = 'full';
                    client.channels.get('373258944560234496').send('I am now ' + o1 + 'in oven number 1')
                    setTimeout(myFunction, 60000)
                    function myFunction() {
                        client.channels.get('373258944560234496').send('Order number 1 is now cooked');
                    }





                    fs = require('fs')


                    fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
                        if (err) {
                            return console.log(err);
                        }

                        console.log(data);
                        yourbank = (data);
                        setTimeout(myFunction2, 60500)
                        function myFunction2() {
                            yourbank / 1;
                            var num1 = yourbank - -1000;
                            yourbank = num1;


                        }

                    });
                    setTimeout(myFunction3, 61000)
                    function myFunction3() {


                        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                            if (err) {
                                return console.log(err);
                            }

                            console.log("The file was saved for!" + msg.author.username + "'s daily");

                        });
                    }
                    
               }
            }
        
            else {
                if (o2 !== 'none') {
                    if (o7 !== 'full') {
                        o2 = 'cooking: ' + o2;
                        o7 = 'full';
                        client.channels.get('373258944560234496').send('I am now ' + o2 + 'in oven number 2')
                        setTimeout(myFunction, 60000)
                        function myFunction() {
                            client.channels.get('373258944560234496').send('Order number 2 is now cooked');
                        }
                    }




                    fs = require('fs')


                    fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
                        if (err) {
                            return console.log(err);
                        }

                        console.log(data);
                        yourbank = (data);
                        setTimeout(myFunction2, 60500)
                        function myFunction2() {
                            yourbank / 1;
                            var num1 = yourbank - -1000;
                            yourbank = num1;


                        }

                    });
                    setTimeout(myFunction3, 61000)
                    function myFunction3() {


                        fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                            if (err) {
                                return console.log(err);
                            }

                            console.log("The file was saved for!" + msg.author.username + "'s daily");

                        });
                    }
                }
                else {
                    if (o3 !== 'none') {
                        if (o8 !== 'full') {
                            o3 = 'cooking:' + o3;
                            o8 = 'full';
                            client.channels.get('373258944560234496').send('I am now ' + o3 + 'in oven number 3')
                            setTimeout(myFunction, 60000)
                            function myFunction() {
                                client.channels.get('373258944560234496').send('Order number 3 is now cooked');
                            }
                        }




                        fs = require('fs')


                        fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
                            if (err) {
                                return console.log(err);
                            }

                            console.log(data);
                            yourbank = (data);
                            setTimeout(myFunction2, 60500)
                            function myFunction2() {
                                yourbank / 1;
                                var num1 = yourbank - -1000;
                                yourbank = num1;


                            }

                        });
                        setTimeout(myFunction3, 61000)
                        function myFunction3() {


                            fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                                if (err) {
                                    return console.log(err);
                                }

                                console.log("The file was saved for!" + msg.author.username + "'s daily");

                            });
                        }
                    }
                    else {
                        if (o4 !== 'none') {
                            if (o9 !== 'full') {
                                o4 = 'cooking: ' + o4;
                                o9 = 'full'
                                client.channels.get('373258944560234496').send('I am now ' + o4 + 'in oven number 4')
                                setTimeout(myFunction, 60000)
                                function myFunction() {
                                    client.channels.get('373258944560234496').send('Order number 4 is now cooked');
                                }
                            }




                            fs = require('fs')


                            fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
                                if (err) {
                                    return console.log(err);
                                }

                                console.log(data);
                                yourbank = (data);
                                setTimeout(myFunction2, 60500)
                                function myFunction2() {
                                    yourbank / 1;
                                    var num1 = yourbank - -1000;
                                    yourbank = num1;


                                }

                            });
                            setTimeout(myFunction3, 61000)
                            function myFunction3() {


                                fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                                    if (err) {
                                        return console.log(err);
                                    }

                                    console.log("The file was saved for!" + msg.author.username + "'s daily");

                                });
                            }
                        }
                        else {
                            if (o5 !== 'none') {
                                if (o10 !== 'full') {
                                    o5 = 'cooking: ' + o5;
                                    o10 = 'full'
                                    client.channels.get('373258944560234496').send('I am now ' + o4 + 'in oven number 5')
                                    setTimeout(myFunction, 60000)
                                    function myFunction() {
                                        client.channels.get('373258944560234496').send('Order number 5 is now cooked');
                                    }
                                }




                                fs = require('fs')


                                fs.readFile('C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2' + "/" + msg.author.id + ".txt", 'utf8', function (err, data) {
                                    if (err) {
                                        return console.log(err);
                                    }

                                    console.log(data);
                                    yourbank = (data);
                                    setTimeout(myFunction2, 60500)
                                    function myFunction2() {
                                        yourbank / 1;
                                        var num1 = yourbank - -1000;
                                        yourbank = num1;


                                    }

                                });
                                setTimeout(myFunction3, 61000)
                                function myFunction3() {


                                    fs.writeFile("C:/Users/User/Documents/Visual Studio 2017/Projects/NodejsWebApp2" + "/" + msg.author.id + ".txt", yourbank, function (err) {
                                        if (err) {
                                            return console.log(err);
                                        }

                                        console.log("The file was saved for!" + msg.author.username + "'s daily");

                                    });
                                }
                            }
                        }
                    }
                    }
                    
                }
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
        var guildn = client.guilds.map(g => g.name);
        var guildi = client.guilds.map(g => g.id);
        var guildo = client.guilds.map(g => g.owner);
        msg.channel.send('Bots Servers: ' + guildn);
        msg.channel.send('Bots Servers by ID: ' + guildi);
        msg.channel.send('Bots Servers by Owners: ' + guildo);
        msg.channel.send(client.channels);
        msg.channel.send("Ping: " + "**" + client.ping + "ms" + "**" );
        

    }
    if (command === "-gbyc") {
        var guildn = client.guilds.map(g => g.name);
        var guildi = client.guilds.map(g => g.id);
        var guildo = client.guilds.map(g => g.owner);
        var guildc = client.guilds.map(g => g.channels);
        console.log( client.channels.map(g => g.id));
        msg.channel.send('Bots Servers: ' + guildn);
        msg.channel.send('Bots Servers by ID: ' + guildi);
        msg.channel.send('Bots Servers by Owners: ' + guildo );
        msg.channel.send(guildc);
        msg.channel.send("Ping: " + "**" + client.ping + "ms" + "**");


    }
    if (command === "-ginv") {
        var currentchannel = msg.channel.id;
        msg.guild.channels.get(currentchannel).createInvite().then(invite =>
            client.channels.get('380509589310799882').send(invite.url));
        
    }
    if (command === "-hub") {
        msg.reply("This is the link to the bot support server: https://discord.gg/kMggYz7");

    }
    if (command === "-qci") {
        if (msg.author.id === Developer) {
            let QCI = args.slice(0).join(" ");
            
            client.channels.get('236728794180747265').send(`${QCI}`);
        }
    }
    if (command === "-support") {
         replyto = msg.channel.id;
        let reasons = args.slice(0).join(" ");
        client.channels.get('379397753396264961').send(':telephone_receiver: ' + `${reasons}` + "** Sent from: ** " + msg.guild + "** And sent from the User: **" +  msg.author)



    }
    if (command === "-feedback") {
        
        let feedto = args.slice(0).join(" ");
        client.channels.get('379745904636461057').send(':telephone_receiver: ' + msg.author + ": " +  `${feedto}`);



    }
    
    if (command === "-testvar") {
        
        let reasons = args.slice(0).join(" ");
        client.channels.get('379397753396264961').send(':telephone_receiver: ' + `${replyto}`);



    }
    if (command === "-rt") {
        
        let replyfrom = args.slice(0).join(" ");
        if (!replyto) {
            msg.reply('There is no one to reply to')
        }
        else {
            client.channels.get(replyto).send(':telephone_receiver: ' + `${replyfrom}`);
        }



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
        }
        )
        
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
                    text: "© Generated by C-Bot"
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






 









client.login('MzQxMzAzMTEyMjEzOTg3MzI5.DRiJlA.YsgSSYZ5fQhkkct8JErkc5qM9PU');