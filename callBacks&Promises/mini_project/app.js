function orderPizza(size) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (size === 'small') {
                reject("small pizza not available")
            }
            else {

                resolve("Large Pizza Ordered")
            }
        }, 2000)
    })
}

function preparePizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza Prepared")
        }, 3000)
    })
}

function deliverPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza Delivered")
        }, 2000)
    })
}

async function placeOrder(isRestaurentOpen) {
    try {
        if (isRestaurentOpen) {
            console.log("Ordering ..!")
            await orderPizza('large').then((data) => console.log(data))
            await preparePizza().then((data) => console.log(data))
            await deliverPizza().then((data) => console.log(data))
                .then(() => console.log("Enjoy your meal!"))
        }
        else {
            throw new Error("Restaurent closed")
        }
    }
    catch (e) {
        console.log(e)
    }

}

placeOrder(true);
// placeOrder(false)

