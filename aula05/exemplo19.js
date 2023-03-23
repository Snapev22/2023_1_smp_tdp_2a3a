class livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){this.preco = pPreco}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco * pDesconto) / 100) 
   }
}
var obj_livro1 = new livro("Use a cabeça java", 200)
var obj_livro2 = new livro ("use a cabeça c#", 170)

var lista = []

lista.push(obj_livro1)
lista.push(obj_livro2)

console.log(lista)
