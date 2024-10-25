let userName = getFirstName("Gregory-lucas", "-")
console.log("seja bem vindo " + userName)

console.log("----------------")


userName = getFirstName("Gustavo Henrique", " ")
console.log("seja bem vindo " + userName)

console.log("----------------")

function getFirstName(name, splitChar = " "){
    let firstName = name.split(splitChar) [0]
    return firstName
}