// dibawah ini merupakan history transaksi yang telah kalian lakukan
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    let sumBtc = items.reduce((prev, cur) => prev + cur.btc.sell, 0) -
    items.reduce((prev, cur) => prev + cur.btc.buy, 0)
    let sumEth = items.reduce((prev, cur) => prev + cur.eth.sell, 0) -
    items.reduce((prev, cur) => prev + cur.eth.buy, 0)
    let sumDoge = items.reduce((prev, cur) => prev + cur.doge.sell, 0) -
    items.reduce((prev, cur) => prev + cur.doge.buy, 0)

    let myIncome = new Object;
    myIncome.btc = sumBtc
    myIncome.doge = sumDoge
    myIncome.eth = sumEth
    return myIncome;
}

console.log(calculateIncome(items))