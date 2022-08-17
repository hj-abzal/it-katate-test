const getBanknoteList = (amountOfMoney) => {
    console.log(amountOfMoney)
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let money = amountOfMoney;
    let resultList = [];
    for (let i = 0; i < banknotes.length; i++) {
        let currentBankNote = banknotes[i]
        while (money >= currentBankNote) {
            money= money - currentBankNote
            resultList.push(currentBankNote)
        }
    }
    return resultList;
}

console.log(getBanknoteList(3359))