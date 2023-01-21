"use strict"
const { segment } = require("oicq")
const { bot } = require("../index")
// hello world
bot.on("message", function (msg) {
	if (msg.raw_message.search("改名") != -1){
		this.name = msg.raw_message.split(' ')[1]
		if (this.name != ''&&this.name!=null){
		console.log(this.name)
		this.setNickname(this.name)
		msg.reply("成功", true) //改为false则不会引用
		}}
    else if (msg.raw_message === '测试' || msg.raw_message==='在吗'){
      msg.reply('测试成功,我在的捏',true)
    }
})
