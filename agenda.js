const prompt = require('prompt-sync')({sigint:false});

class Contato{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda{
    constructor(){
        this.contatos = [];
    }

    
    adicionarContato(){
        console.log(" *** Adicionando Contato *** ");
        console.log("");

        // Obtendo informações do usúarios
        let nome = prompt("Digite o nome do contato: ");
        let telefone = parseInt(prompt("Digite o número de telefone do contato: "));
        let email = prompt("Digite o e-mail do contato: ");
        
        // Verifica se o número de telefone tem no máximo 10 dígitos
        if(telefone.length <= 10){
        let novoContato = new Contato(nome, telefone, email);
        this.contatos.push(novoContato);
        
        console.log("Contato salvo com sucesso.");
        } else {
            console.log("O número de telefone deve ter no máximo 10 dígitos. Contato não salvo.");
        }
        console.log("");

    }

    listarContato(){
        console.log(" *** Lista de Contatos *** ");
        console.log("");

        // Intera com os contatos e exibi na lista
        for(let i = 0; i < this.contatos.length; i++){
            let contato = this.contatos[i];
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone},  E-mail: ${contato.email}`);
        }
        console.log("");
    }

    editarContato(){
        console.log(" *** Editar Contatos *** ");
        console.log("");

        // Solicita o nome do contato que será editado
        let nome = prompt("Digite o nome do contato que deseja editar: ");

        // Busca o indice do contato a ser editado
        let editar = (contato) => contato.nome.toLowerCase() === nome.toLowerCase();
        let index = this.contatos.findIndex(editar);

        // Verifica se o contato foi encontrado
        if(index !== -1){
            // Solicita as informações que serão editadas
            let novoNome = prompt("Digite o novo nome (ou clique enter para continuar com o mesmo): ");
            let novoTelefone = parseInt(prompt("Digite o novo telefone (ou clique enter para continuar com o mesmo): "));
            let novoEmail = prompt("Digite o novo e-mail (ou clique enter para continuar com o mesmo): ");

            // Aplica as edições, se fornecidas
            if(novoNome){
                this.contatos[index].nome = novoNome;
            }
            if(!isNaN(novoTelefone)){
                this.contatos[index].telefone = novoTelefone;
            }
            if(novoEmail){
                this.contatos[index].email = novoEmail;
            }
            console.log(`Contato ${nome}, foi editado com sucesso.`);
        } else {
            console.log(`Contato ${nome}, não foi encontrado.`);
        }

    }

    excluirContato(){
        console.log(" *** Excluir Contatos *** ");
        console.log("");

        // Solicita o nome do contato que será excluido
        let nome = prompt("Digite o nome do contato que deseja excluir:  ");
        // Busca o indice do contato a ser excluido
        let excluir = (contato) => contato.nome.toLowerCase() === nome.toLowerCase();
        let index = this.contatos.findIndex(excluir);

        // Verifica se o contato foi encontrado
        if(index !== -1){
            // Remove o contato da lista
            this.contatos.splice(index,1);
            console.log(`Contato ${nome}, excluido com sucesso.`);
        } else {
            console.log(`Contato ${nome}, não foi encontrado.`);
        }

        console.log("");
    }

    pesquisarContato(){
        console.log(" *** Pesquisar Contato *** ");
        console.log("");

        // Solicita o nome do contato a ser pesquisado
        let nome = prompt("Digite o nome do contato que deseja pesquisar: ");
        // Realiza a pesquisa de contato por nome
        let index = this.contatos.filter(contato => contato.nome.toLowerCase() === nome.toLowerCase());

        // Verifica se a  pesquisa houve resultado
        if(index.length > 0){
            console.log("Contato encontrado: ");
            // Exibi o contato encontrado
            index.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone ${contato.telefone}, E-mail: ${contato.email}`);
            })
        } else {
            console.log("Nenhum contato encontrado com esse nome.");
        }
    }
}

var agenda = new Agenda;
var parar = false;

while(!parar){
console.log(" *** Agenda de Contatos *** ");
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
    agenda.adicionarContato();
    break;
case 2:
    agenda.listarContato();
    break;
 case 3:
    agenda.editarContato();
    break;
case 4:
    agenda.excluirContato();
    break;
case 5:
    agenda.pesquisarContato();
    break;
case 6:
    parar = true;
    console.log("Sua sessão na agenda foi finalizada.");
    break;
default:
    console.log("Essa opção não existe! Tente novamente");
} 
}