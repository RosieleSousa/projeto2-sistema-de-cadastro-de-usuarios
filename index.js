const prompt = require('prompt-sync')()
const Usuario = require('./class/Usuario')

const usuarios = []
let continuar = true

while(continuar){
    const nome = prompt('Digite seu nome: ')
    const idade = Number(prompt('Digite sua idade: '))
    const email = prompt('Digite seu email: ')
    
    const user = new Usuario(nome, idade, email)

    const ativo = (prompt('Usuário ativo? [S/N]: '))
    if(ativo === 'S' || ativo === 's'){
        user.ativo = true
    }else if(ativo === 'N' || ativo === 'n'){
        user.ativo = false
    } else{
        console.log('Dado incorreto!')
        break
    }

    usuarios.push(user)

    const adicionarUsuario = prompt('Deseja adicionar outro usuário? [S/N]: ')
    if(adicionarUsuario === 'S' || adicionarUsuario === 's'){
        continuar = true 
    } else if(adicionarUsuario === 'N' || adicionarUsuario === 'n'){
        continuar = false
    } else{
        console.log('Dado incorreto!')
        break
    }
    for (let i = 0; i < usuarios.length; i++){
        usuarios[i].mostrarDados()
    if(i < usuarios.length -1){
        console.log(`
            =====================
            `)
        }
    }
}