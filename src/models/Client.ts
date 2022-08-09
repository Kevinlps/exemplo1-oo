export default class Client {
    name: string
    cpf: string
    address: string
    phone: string
    email?: string

    constructor() {
        this.name = ''
        this.address = ''
        this.cpf = ''
        this.email = ''
        this.phone = ''
    }
}

