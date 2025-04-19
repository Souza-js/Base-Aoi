module.exports = {
name: "ping",
aliases: ['pi'],
code: `
$reply[$messageID;false]
$clientTyping
🏓 ・ Latência **Atual:** \`$ping ms\`
`
}
