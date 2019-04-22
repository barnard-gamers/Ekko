require('dotenv').config()
var SlackBot = require('slackbots');
let schedule = {
  "9:30" : "始業、今日も一日頑張ってください ",
  "9:45" :  "１限目開始",
  "10:35":  "１限目休み時間",
  "10:45":  "２限目開始", 
  "11:35":  "２限目休み時間", 
  "11:45":  "3限目レポートの時間", 
  "12:35":  "昼休み", 
  "13:15":  "４限目開始 ",
  "14:0":  "４限目休み時間", 
  "14:15":  "５限目開始", 
  "15:0":  "５限目休み時間", 
  "15:15":  "６限目開始", 
  "16:0":  "終業、今日も一日お疲れ様でした"
}
var bot = new SlackBot({
  token:process.env.SECRET_KEY,
  name:"ekko"
})

bot.on("start", function(){
  console.log("start")
  let next_m;
  setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let time = h + ":" + m
    Object.keys(schedule).forEach(function(val){
      if(val === time && next_m !== m){
        next_m = m
        post(schedule[val])
      }
      else{
        console.log(time)
      }
    })
  }, 1000)
})
function post(message){
  let params = {
    icon_url: 'https://www.mobafire.com/images/avatars/ekko-classic.png'
  };
  bot.postMessageToChannel("timestamp", message, params)
}
