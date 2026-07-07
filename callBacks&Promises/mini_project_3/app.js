const account = {
    name: "Venkat",
    balance: 25000
}

function verifyPin(pin) {
    return new Promise((resolve, reject) => {
        console.log("Verifying PIN...")
        setTimeout(() => {
            if (pin === 1234) {
                resolve("Pin Verified")
            }
            else {
                reject("Invalid PIN")
            }
        }, 2000)
    })
}

function checkBalance(account) {
    return new Promise((resolve, reject) => {
        console.log("Checking Balance...")
        setTimeout(() => {
            resolve(account.balance);
        }, 2000)
    })
}

function withdrawMoney(balance, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= balance) {
                resolve("Withdrawal Successful")
            }
            else {
                reject("Insufficient Balance")
            }
        }, 2000)
    })
}

function updateBalance(balance, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            account.balance = balance - amount;
            resolve(account.balance)
        }, 1000)
    })
}


async function atm(pin, amount) {
    try {
        const verification = await verifyPin(pin);
        console.log(verification);
        const balance = await checkBalance(account);
        console.log(`Current Balance : ${balance}`);
        const withdrawlMsg = await withdrawMoney(balance, amount)
        console.log(withdrawlMsg)
        const updatedBalance = await updateBalance(balance, amount)
        console.log(`Updated Balance : ${updatedBalance}`)
        console.log("Thank You!")
    }
    catch (err) {
        console.log(err)
    }

}
let pin = 1234;
let amount = 2000;

atm(pin, amount);
