function rand(min, max) {
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Bad Value'))
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('dbconnection', rand(1, 3))
    .then(res => {
        console.log(res)
        return esperaAi('api', rand(1, 3))
    }).then(res => {
        console.log(res)
        return esperaAi(2, rand(1, 3))
    }).then(res => {
        console.log(res)
    })
    .catch(e => { console.log(e) })

console.log('sera exibido real time')