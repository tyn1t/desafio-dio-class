
class Heroi{
    constructor (nome, idade, tipo){
        this.nome = nome 
        this.idade = idade
        
        switch (tipo) {
            case "mago":
                this.tipo = tipo 
                this.ataque = "usou magia"
                break
            case "monge":
                this.tipo = tipo 
                this.ataque = "usou espadausou artes marciais"
                break
            case "ninja":
                this.ataque = "usou shuriken"
                this.tipo = tipo 
                break
            default:
                this.tipo = "guerreiro"
                this.ataque = "usou espada"
                break
             
        }
        
    }

    ataca() {
       console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

const heroi_1 = new Heroi(nome="jaoa", idade=18, tipo="guerreio")
const heroi_2 = new Heroi(nome="luca", idade=18, tipo="mago")
const heroi_3 = new Heroi(nome="bia", idade=18, tipo="ninja")
const heroi_4 = new Heroi(nome="carol", idade=18, tipo="monge")

const list_heroi = [heroi_1, heroi_2, heroi_3, heroi_4]
for(let index = 0; index < list_heroi.length; index++){
    list_heroi[index].ataca()
} 