var token = '165968804:AAH8UBGAVD1Cxd1rL62W8rVAqNU1dtAfdxg';

var Bot = require('node-telegram-bot-api'),
var bot = new Bot(token);
bot.setWebHook('https://nodejsbot.herokuapp.com/' + bot.token);

console.log('bot server started...');

// hello command
bot.onText(/^\/shello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

// sum command
bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

module.exports = bot;