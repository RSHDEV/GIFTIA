case '#tp':
    if (args.length < 1) {
        return reply('Pilih themenya om, 1 - 162')
    } else if (args[0].toLowerCase() === 'list') {
        teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
        teks = teks.replace(/<br>/g, '\n')
        return reply(teks)
    } else if (args.length < 2) {
        return reply('Teksnya juga dong om')
    }
    reply(mess.wait)
    anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
    voss = await fetch(anu)	
    ftype = require('file-type')	
    vuss = await ftype.fromStream(voss.body)
    if (vuss !== undefined) {
        corp.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
    } else {
        reply('Terjadi kesalahan, silahkan pilih theme lain')
    }
    break
case '#ep':
    if (args.length < 1) {
        return reply('Pilih themenya om, 1 - 216')
    } else if (args[0].toLowerCase() === 'list') {
        teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
        teks = teks.replace(/<br>/g, '\n')
        return reply(teks)
    } else if (args.length < 2) {
        return reply('Teksnya juga dong om')
    }
    reply(mess.wait)
    anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
    voss = await fetch(anu)
    ftype = require('file-type')
    vuss = await ftype.fromStream(voss.body)
    //console.log(vuss)
    if (vuss !== undefined) {
        corp.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
    } else {
        reply('Terjadi kesalahan, silahkan pilih theme lain')
    }
    break
q
case '#tahta':
    if (args.length < 1) return reply('Teksnya om')
    anu = `https://mhankbarbar.moe/api/htahta?text=${args.join(' ')}&apiKey=${apiKey}`
    voss = await fetch(anu)
    ftype = require('file-type')
    vuss = await ftype.fromStream(voss.body)
    if (vuss !== undefined) {
        corp.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
    } else {
        reply('Terjadi kesalahan')
    }
    break