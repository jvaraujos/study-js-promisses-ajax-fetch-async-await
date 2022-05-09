function rand(min, max) {
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('Bad Value'))
                return
            }
            resolve('Passei na promisse: ' + msg)
        }, tempo)
    })
}

async function executa() {
    try {

        const fase1 = esperaAi('Fase 1', 1000)
        console.log(fase1)

        setTimeout(() => {
            console.log('esta promisse estava pendente', fase1)
        }, 1200)
        const fase2 = await esperaAi('Fase 2', rand(1, 5))
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand(1, 5))
        console.log(fase3)
    } catch (err) {
        console.log(err)
    }

}

executa()