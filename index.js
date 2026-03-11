const Prisma = require('./models/Prisma')
const rl = require('readline-sync')


let lado = Number(rl.question('Digite o valor do lado do prisma: '))
console.log(lado)
let altura = Number(rl.question('Digite o valor da altura do prisma: '))
console.log(altura)

let prisma = new Prisma(lado, altura)

let areaBase = prisma.areaBase()
let areaLateral = prisma.areaLateral()
let areaTotalPrisma = prisma.areaTotalPrisma()
let volumePrisma = prisma.volumePrisma()


console.log(`A área da base do prisma é: ${areaBase.toFixed(3)} m³`)
console.log(`A área lateral do prisma é: ${areaLateral.toFixed(3)} m³`)
console.log(`A área total do prisma é: ${areaTotalPrisma.toFixed(3)} m³`)
console.log(`O volume do prisma é: ${volumePrisma.toFixed(3)} m³`)