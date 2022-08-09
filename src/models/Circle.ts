

export default class Circle {
    raio : number
    constructor(raio:number){
        this.raio = raio > 0 ? raio : 1
    }

    calculateArea(){
        return (this.raio * this.raio) * Math.PI  
    }

    calculatePerimeter(){
        return this.raio * Math.PI * 2
    }
}