import Circle from "./models/Circle";
import Client from "./models/Client";
import Contact from "./models/Contact";
import Rectangle from "./models/Rectangle";


/*
*ESTOU INSTANCIANDO UM NOVO OBJETO DA CLASS CLIENT 
*CHAMADO CLIENT1
*(as propriedades dentro de uma classe são chamadas de atributos)
*(a instacia é um individio dentro da classe)
*/

const client1 = new Client()
console.log(client1)
client1.cpf = '000000000'
client1.phone = '679999999'
client1.name = 'abcdefghe'
client1.email = 'Email@exemplo.com'
console.table(client1)

const rect1 = new Rectangle(3, 6)
console.log(rect1)
const area1 = rect1.calculateArea()
console.log(`Área: ${area1}`)
const perimeter1 = rect1.calculatePerimeter()
console.log(`perimeter ${perimeter1}`)

const rect2 = new Rectangle(5, 7)
console.log(rect2)
const area2 = rect2.calculateArea()
console.log(`Área: ${area2}`)
const perimeter2 = rect2.calculatePerimeter()
console.log(`perimeter ${perimeter2}`)


const isrect1Bigger = rect1.isMyyAreaBigger(rect2)
console.log(`Rect1 > Rect2 ? ${isrect1Bigger}`)



const raio1 = new Circle(-20)
console.log(`Raio: ${raio1.raio}`)
const areaC =  raio1.calculateArea()
console.log(`A Area é ${areaC.toFixed(2)}`)

const perimeterC = raio1.calculatePerimeter()
console.log(`O perimetro é ${perimeterC.toFixed(2)}`)


const contact1 = new Contact('adcere','(77) 99999-9998','sup@exemplo.com')
//contact1.phone = '(77) 99999-9999'
console.log(contact1)