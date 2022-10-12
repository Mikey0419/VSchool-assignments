// resolve
// reject

function flipCoin() {
    return new Promise((res, rej) => {
        let randomNumber = Math.floor(Math.random() * 2);

        (randomNumber === 0) ? res(`${randomNumber}: HEADS`) : rej(`${randomNumber}: TAILS`);
    })
}

console.clear();

flipCoin()
    .then(response => console.log(response))
    .catch(error => console.log(error))