class livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){this.preco = pPreco}

    calcularDesconto(){
    this.preco = this.preco - 10
   }
}
var obj_livro1 = new livro ("Use a cabeça java", 200)
obj_livro1.calcularDesconto()
console.log("Nome do livro: "+ obj_livro1.nome + " custa" + 
obj_livro1.preco +" reais " )