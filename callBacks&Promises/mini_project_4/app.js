

//login function
function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Logging in...")
        setTimeout(() => {
            if (username === 'venkat' && password === '12345678') {
                resolve("Login Successful")
            }
            else {
                reject("Invalid Credentials")
            }
        }, 2000)
    })
}

//stock check
function checkStock(quantity, product) {
    return new Promise((resolve, reject) => {
        console.log("Checking Stock...")
        setTimeout(() => {
            if (quantity <= product.stock) {
                resolve("Stock Available")
            }
            else {
                reject("Out of Stock")
            }
        }, 2000)
    })

}

// add to cart
function addToCart(quantity, product) {
    return new Promise((resolve, reject) => {
        console.log("Adding Item...")
        setTimeout(() => {
            resolve("Item Added To Cart")
        }, 1000)
    })
}

//payment processing
function processPayment(user, product, quantity) {
    return new Promise((resolve, reject) => {
        console.log("Processing Payment...")
        setTimeout(() => {
            if (user.wallet >= product.price * quantity) {
                user.wallet = user.wallet - product.price * quantity;
                product.stock = product.stock - quantity;
                resolve("Payment Successful")
            }
            else {
                reject("Payment Failed")
            }
        }, 2000)
    })
}

//generate invoice
function generateInvoice(quantity, product) {
    return new Promise((resolve, reject) => {
        console.log("Generating Invoice...")
        setTimeout(() => {
            resolve({
                product: product.name,
                quantity: quantity,
                total: quantity * product.price
            })
        }, 2000)
    })
}

function sendEmail(invoice) {
    return new Promise((resolve, reject) => {
        console.log("Sending Email...")
        setTimeout(() => {
            resolve("Email Sent Successfully")
        }, 2000)
    })
}


async function checkout(username, password, quantity) {
    try {
        const verificationMsg = await login(username, password)
        console.log(verificationMsg);
        const stockCheck = await checkStock(quantity, product);
        console.log(stockCheck);
        const cartNotification = await addToCart(quantity, product);
        console.log(cartNotification);
        const paymentStatus = await processPayment(user, product, quantity)
        console.log(paymentStatus);

        const invoice = await generateInvoice(quantity, product);
        console.log("Invoice");
        console.log(`Product : ${invoice.product}`);
        console.log(`Quantity: ${invoice.quantity}`);
        console.log(`Total   : ${invoice.total}`);
        const emailStatus = await sendEmail(invoice)
        console.log(emailStatus);
        console.log("Order Completed")
    }
    catch (e) {
        console.log(e)
    }

}

const user = {
    username: "venkat",
    password: "12345678",
    wallet: 80000,
    mailId: 'venkat234@gmail.com'
}

const product = {
    name: "Laptop",
    stock: 5,
    price: 50000
}

checkout(user.username, user.password, 1)
