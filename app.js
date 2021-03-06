const Bot = require('slackbots');
const Slack = require('slack');
const conn = require('./sql');
const os = require('os');

let bot_token = '';
conn.query("select * from mcds.app_sensitive_values where app_name = 'bossbot' and `key` = 'bot_api_token';", function(err, result) {
    if(err) throw err;
    console.log('result : ');
    console.log(result);
    bot_token = result[0].value;
    const settings = {
        token: result[0].value,
        name: 'BossBot'
    };

    const bot = new Bot(settings);
    const slack = new Slack();
    logic(bot, slack, conn);
});


function logic(bot, slack, sqlconn) {

    bot.on('start', function() {
        bot.postMessageToChannel('test', 'BossBot initialized at ' + os.hostname());

    });

    bot.on('message', function(msg) {
        console.log('Incoming message : ');
        console.log(msg);
        if(msg.type !== 'message') return;
        if(msg.username === 'BossBot') return;
        slack.users.info(
            {
                token: bot_token,
                user: msg.user
            }, (err, data) => {
                if(err) throw err;
                //console.log(data);
                let name = data.user.name;
                bot.postMessageToUser(name, 'Howdy here, I\'ve got your meesage : ' + msg.text);
                //Use keyword chatbot engine handle all status
                //console.log(msg);
            }
        );
    });
}



