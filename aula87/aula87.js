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

const promisses = [
    esperaAi('dbconnection 1', rand(1, 5)),
    esperaAi('apiconnection 2', rand(1, 5)),
    esperaAi(100, rand(1, 5)),
]

Promise.race(promisses).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})