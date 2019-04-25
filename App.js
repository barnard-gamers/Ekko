require('dotenv').config()
var SlackBot = require('slackbots');

let schedule = {
  "09:30" : "始業、今日も一日頑張ってください ",
  "09:45" :  "1限目開始",
  "10:35":  "1限目休み時間",
  "10:45":  "2限目開始",
  "11:35":  "2限目休み時間",
  "11:45":  "3限目レポートの時間",
  "12:35":  "昼休み",
  "13:15":  "4限目開始 ",
  "14:00":  "4限目休み時間",
  "14:15":  "5限目開始",
  "15:00":  "5限目休み時間",
  "15:15":  "6限目開始",
  "16:00":  "終業、今日も一日お疲れ様でした"
}
var bot = new SlackBot({
  token:process.env.SECRET_KEY,
  name:"ekko"
})

bot.on("start", function(){
  console.log("start")
})
cron.schedule('* * * * *', () => {
  `${fixTime(new Date().getHours())}:${fixTime(new Date().getMinutes())}` in schedule ? Announce(`${fixTime(new Date().getHours())}:${fixTime(new Date().getMinutes())}`) : null;

  function Announce(time) {
    post(schedule[time])
  }
});
function fixTime(number) {
	return (number < 10 ? '0' : '') + number
}
function post(message){
  let params = {
    icon_url: 'https://www.mobafire.com/images/avatars/ekko-classic.png'
  };
  bot.postMessageToChannel("timestamp", message, params)
}
bot.on('error', console.error);//エラーハンドリング