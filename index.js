const Prisma = require('./models/Prisma')
const Piramide = require('./models/Piramide')
const rl = require('readline-sync')

let opcao = 0 // 0 significa que o programa continua e 0 fim programa 

// o programa fica rodando enquanto diferente de 0
do{
    console.log(`==============================`)
    console.log(` 1  - Calculos do Prisma`)
    console.log(` 2  - Calculos do Pirâmide`)
    console.log(` 0  - Sair do Programa`)
    console.log(`==============================\n`)
    opcao = Number(rl.question('Qual a sua opcao: '))

    switch (opcao){
        case 1:
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
            console.log('')

            break
            case 2:
                let aresta = Number(rl.question('Digite o valor da aresta da Piramide: '))
                console.log(aresta)
               let apotema = Number(rl.question('Digite o valor da apotema da Piramide: '))
               console.log(apotema)
               let alturaP = Number(rl.question('Digite o valor da altura da Piramide: '))
               console.log(alturaP)
   
               let piramide = new Piramide(aresta, apotema, alturaP)
   
               let areaBasePir = piramide.areaBase()
               let areaLateralPir = piramide.areaLateral()
               let areaTotalPiramide = piramide.areaTotal()
               let volumePiramide = piramide.volumePiramide()
   
   
               console.log(`A área da base da Piramide é: ${areaBasePir.toFixed(3)} m³`)
               console.log(`A área lateral da Piramide é: ${areaLateralPir.toFixed(3)} m³`)
               console.log(`A área total da Piramide é: ${areaTotalPiramide.toFixed(3)} m³`)
               console.log(`O volume da Piramide é: ${volumePiramide.toFixed(3)} m³`)
               console.log('')
            break
            //    default:
            //    console.log('Opção inválida! Digite novamente!')
        }
}while(opcao !== 0)
    console.log('Saindo do sistema ...')




