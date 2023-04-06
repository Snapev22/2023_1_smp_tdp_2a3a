class pessoa{
    constructor(pNome, pEndereco){
        this.nome = pNome
        this.endereco = pEndereco
    }
    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}

    get Endereco(){return this.endereco}
    set Endereco(pEndereco){this.endereco = pEndereco}

    Imprimir(){
        return "Nome: "+ this.nome +
        "Endereço: " + this.endereco
    }
}
class juridica extends pessoa{
    constructor(pNome, pEndereco,pCnpj, pRazaoSocial ){
        super(pNome, pEndereco)
        this.cnpj = pCnpj
        this.razaoSocial = pRazaoSocial
    }
    get Cnpj(){return this.cnpj}
    set Cnpj(pCnpj){this.cnpj = pCnpj}

    get RazaoSocial(){return this.razaoSocial}
    set RazaoSocial(pRazaoSocial){this.razaoSocial = pRazaoSocial}
    Imprimir(){
        return super.Imprimir() + "\nRazaosocial" + this.razaoSocial + "\nCnpj" + this.cnpj    }
}
var obj_juridica1 = new juridica("Vitor", "São miguel", "123456", "Cruzeiro do sul")
console.log("\nNome: "+ obj_juridica1.nome +  "\nEndereço: " + obj_juridica1.endereco +  "\ncnpj: " + 
obj_juridica1.cnpj +  "\nRazão social " + obj_juridica1.RazaoSocial) 

class  fisica extends pessoa {
    constructor(pNome, pEndereco, pCpf, pDtNascimento){
    super(pNome, pEndereco)
    this.cpf = pCpf
    this.dtnascimento = pDtNascimento

    }
    get Cpf (){return this.cpf}
    set Cpf (pCpf){this.cpf = pCpf}

    get Dtcnascimento(){return this.dtnascimento}
    set Dtnascimento(pDtNascimento){this.dtnascimento = pDtNascimento}

    Imprimir(){
        return super.Imprimir() + "\ncpf" + this.cpf + "\ndtnascimento" + this.dtnascimento
    }
}
var obj_fisica1 = new fisica ("Cleitin", "Hamilton regis", "456789", "22/09/2003")
console.log("\nNome"+ obj_fisica1.nome + "\nEndereço" + obj_fisica1.endereco + "\nCPF" + obj_fisica1.cpf
+ "\nData de nascimento" + obj_fisica1.dtnascimento)