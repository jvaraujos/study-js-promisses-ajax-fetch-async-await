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

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })