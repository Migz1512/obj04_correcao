class Piramide{
    constructor(aresta, apotema, alturaP){
        this.aresta = aresta
        this.apotema = apotema
        this.alturaP = alturaP
    }

    areaBase(){
        return ((this.aresta * this.aresta) * Math.sqrt(3)) / 4
    }

    areaLateral(){
        return (this.perimetro() * this.apotema) / 2
    }

    perimetro(){
        return 3 * this.aresta
    }

    areaTotal(){
        return this.areaBase() + this.areaLateral()
    }

    volumePiramide(){
        return (1/3) * this.areaBase * this.alturaP
    }    

}
module.exports = Piramide