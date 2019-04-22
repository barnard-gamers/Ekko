require('dotenv').config()
let schedule = ["12:39","9:30", "9:45" ,"10:35","10:45", "11:35", "11:45", "12:35", "13:15","14:00", "14:15", "15:00", "15:15", "16:00"]
var SlackBot = require('slackbots');
var bot = new SlackBot({
  token:process.env.SECRET_KEY,
  name:"ekko"
})
let date = new Date()
bot.on("start", function(){
  console.log("start")
  let next_m;
  setInterval(() => {
    let h = date.getHours()
    let m = date.getMinutes()
    let time = h + ":" + m
    for(var i = 0; i <= schedule.length; i++){
      if(schedule[i] === time && next_m !== m){
        next_m = m
        switch(schedule[i]){
          case "9:30":
          post("始業、今日も一日頑張ってください ")
          break;
          case "9:45":
          post("１限目開始")
          break;
          case "10:35":
          post("１限目休み時間")
          break;
          case "10:45":
          post("２限目開始")
          break;
          case"11:35":
          post("２限目休み時間")
          break;
          case"11:45":
          post("3限目レポートの時間")
          break;
          case"12:35":
          post("昼休み")
          break
          case"13:15":
          post("４限目開始 ")
          case"14:00":
          post("４限目休み時間")
          break;
          case"14:15":
          post("5限目開始")
          break;
          case "15:00":
          post("５限目休み時間")
          break;
          case"15:15":
          post("６時間目開始")
          break;
          case"16:00":
          post("終業、今日も一日お疲れ様でした")
        }

      }
    }
  }, 1000);
})

function post(message){
  let params = {
    icon_url: 'https://www.mobafire.com/images/avatars/ekko-classic.png'
  };
  bot.postMessageToChannel("timestamp", message, params)
}
