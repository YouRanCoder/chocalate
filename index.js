//启用严格模式
"use strict"

//导入oicq包
const { createClient } = require("oicq")

//帐号
const account = 1137787997

const bot = createClient(account)

bot.on("system.login.qrcode", function (e) {
	this.logger.mark("扫码后按Enter完成登录")
	process.stdin.once("data", () => {
		this.login()
	})
}).login()

exports.bot = bot
require('./plugins/accept_group')
require('./plugins/hello')
process.on("unhandledRejection", (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
bot.on("system.online", function () {
	// 你的账号已上线，你可以做任何事
	this.logger.info(`WatchCat->Chocalate酱已经开始监听: QQ=>${this.nickname}(${this.uin})，我有${this.fl.size}个好友，${this.gl.size}个群`)
})