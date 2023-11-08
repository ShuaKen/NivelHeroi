class heroi{
	constructor(nome, idade, tipo){
 		this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ''      
    }
    atacar(){
        if (this.tipo == 'mago'){
			this.ataque = 'magia'
        }else if (this.tipo == 'guerreiro'){
        	this.ataque = 'espada'
        }else if (this.tipo == 'monge'){
        	this.ataque = 'artes marciais'
        }else if (this.tipo == 'ninja'){
        	this.ataque = 'shuriken'
        }
    	console.log(`o ${this.tipo} atacou usando o ataque de ${this.ataque}`)
    }
}
let heroi1 = new heroi("Bruce", 28, "guerreiro")
heroi1.atacar()