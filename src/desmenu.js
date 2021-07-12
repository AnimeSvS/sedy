const desmenu = (prefix, pushname) => {
    return `
*Comandos De Descargas ✅*

*AUDIO*

${prefix}play2
Una alternativa por si *play llego a su limite de canciones

${prefix}ytmp3
Coloca el link del video YT

*VIDEO*
${prefix}ytmp4
Coloca el link del video YT

    
play y *play2 tiene un limite de 2000 canciones en el server, si llega a su limite se restablecera dentro de 24 horas
`

}

exports.desmenu = desmenu
