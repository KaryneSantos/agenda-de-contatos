const prompt = require('prompt-sync')({sigint:false});

class Contato {
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

var contatos = [];

function adicionarContatos(){

    console.log(" *** ADICIONANDO CONTATO *** ");

    var nome = prompt("Digite o nome do contato:");
    var telefone = parseInt(prompt("Digite o número de telefone do contato:"));
    var email = prompt("Digite o e-mail do contato:");

    let novo_contato = new Contato(nome, telefone, email); 
    contatos.push(novo_contato);

    console.log("Contato salvo com sucesso.");
    console.log("");

}

function listaContatos(){
    console.log(" *** LISTA DE CONTATOS *** ");
    console.log("");
    for (let i = 0; i < contatos.length; i++) {
        var contato = contatos[i];
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}`);
    }
    console.log("-----------------------------------------------")
    console.log("");
}

var parar = false;

while(!parar){
console.log(" *** AGENDA DE CONTATOS *** ");
console.log(" 1. Adicionar Contatos ");
console.log(" 2. Lista de Contatos ");
console.log(" 3. Editar Contato ");
console.log(" 4. Excluir Contato ");
console.log(" 5. Pesquisar por Contato ");
console.log(" 6. Sair da Agenda ");
console.log("-----------------------------------------------")

var opcao = Number(prompt("Escolha uma opção:"));   
console.log("");

switch(opcao){
    case 1: 
    adicionarContatos()
    break;
    case 2:
        listaContatos();
        break;
    case 6:
        parar = true;
        break;
    default:
        console.log("Essa opção não existe! Tente novamente");
}
}
