class Usuario {
    static totalUsuarios = 0
    #ativo
    constructor(nome, idade,email) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.#ativo = false
        Usuario.totalUsuarios++
    }

    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`
    }
    get ativo() {
        return this.#ativo
    }
    set ativo(valor) {
        if(typeof valor === 'boolean') {
            this.#ativo = valor
        } else{
            'Usuário não ativo.'
        }
    }
    mostrarDados(){
        console.log (`
            ${this.boasVindas}
            Nome: ${this.nome}
            Idade: ${this.idade}
            Email: ${this.email}
            Ativo: ${this.ativo}`)
    }
    static totalUsuarios() {
        console.log(`total de usuários criados: ${Usuario.totalUsuarios}`)
    }
}
module.exports = Usuario

//toLocaleUpperCase()