export default class Rectangle {
    heigt: number
    basis: number 

    constructor(heigt:number, basis:number ) {
        this.basis = basis
        this.heigt = heigt
    }
/**
 * metodos 
 */
    calculateArea() {
        return this.heigt * this.basis
    }

    calculatePerimeter() {
        return 2 * (this.basis + 2) * this.heigt
    }

    isMyyAreaBigger(otherRectangle: Rectangle): boolean {
        const area1 = this.calculateArea()
        const area2 = otherRectangle.calculateArea()
        return area1 > area2
    }
}