//sem json
let name = "gregory"
let age = 15
let products = ["mause 2xwm", "teclado mecanico", "munitor"]
let productsValores = [29.90, 129.90, 899.99]

generateInvoice(name, products, age)

function generateInvoice(name, products, age){
    console.log("o comprador é " + name)
    console.log("A idade é " + age)
    console.log("----------------------")
    console.log("o produto é " + products[0])
    console.log("o valor é " + productsValores[0]) 
}

//com json
let invoice = {
    name: "Gregory",
    age: 15,
    products: {
        0:["mouse 2wmx", 29.90],
        1:["teclado mecanico", 300],
        2:["munitor ", 900],
        3:["TV 50 pol", 2.000]
    }
}

console.log(invoice.products)