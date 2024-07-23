function generateRandomNumber= (num) => {
    return Math.floor(Math.random() * num)
};

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

let personnalWisdom = [];

for (let prop in collectiveWisdom) {
    let optionIdx= generateRandomNumber(collectiveWisdom[prop].length)

    switch (prop) {
        case 'signInfo':
            personnalWisdom.push(`Your sign right now is a : ${collectiveWisdom[prop][optionIdx]}.`)
        break
    
        case 'fortuneOutput':
            personnalWisdom.push(`You are having: ${collectiveWisdom[prop][optionIdx]}.`)
        break

        case 'fortuneOutput':
            personnalWisdom.push(`You should : ${collectiveWisdom[prop][optionIdx]}.`)
        default:
            personnalWisdom.push('There is not enough info.')

    }
};


