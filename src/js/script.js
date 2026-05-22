let contador = 0;
let totalEstoqueBaixo = 0;
 
let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";
 
const botaocadastro = document.getElementById("cadastro");
const botaoSobre = document.getElementById("sobre");
 
let vinhos = [
 
    {
        nome: "Aice di Tmesco",
        tipo: "Branco",
        safra: 2018,
        estoque: 10
    },
 
    {
        nome: "Viales di Denrs",
        tipo: "Tinto",
        safra: 2015,
        estoque: 3
    },
 
    {
        nome: "Oerto Rose",
        tipo: "Rosé",
        safra: 2021,
        estoque: 2
    }
 
];
 
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}
 
function validarEntrada(texto) {
 
    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida. Digite novamente:");
    }
 
    return texto.trim();
}
 
function validarNumero(numero) {
 
    while (isNaN(numero) || numero < 0) {
        numero = Number(prompt("Digite um número válido:"));
    }
 
    return numero;
}
 
function classificarVinho(safra) {
 
    let anoAtual = 2026;
    let idade = anoAtual - safra;
 
    if (idade <= 5) {
        return "Vinho Jovem";
    }
 
    else if (idade <= 15) {
        return "Vinho Amadurecido";
    }
 
    else {
        return "Vinho Antigo";
    }
}
 
function mostrarDados(nome, tipo, safra, quantidade, classificacao) {
 
    console.log("===== DADOS DO VINHO =====");
 
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);
}
 
botaocadastro.addEventListener("click", function () {
 
    let continuar = true;
 
    while (continuar) {
 
        let nome = validarEntrada(
            prompt("Digite o nome do vinho:")
        );
 
        let tipo = validarEntrada(
            prompt("Digite o tipo do vinho:")
        );
 
        let safra = validarNumero(
            Number(prompt("Digite a safra do vinho:"))
        );
 
        let quantidade = validarNumero(
            Number(prompt("Digite a quantidade em estoque:"))
        );
 
        let classificacao = classificarVinho(safra);
 
        mostrarDados(
            nome,
            tipo,
            safra,
            quantidade,
            classificacao
        );
 
        vinhos.push({
            nome: nome,
            tipo: tipo,
            safra: safra,
            estoque: quantidade
        });
 
        contador++;
 
        if (estoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }
 
        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            vinhoMaisAntigo = nome;
        }
 
        let resposta = validarEntrada(
            prompt("Deseja cadastrar outro vinho? (sim/não)")
        );
 
        if (resposta.toLowerCase() !== "sim") {
            continuar = false;
        }
    }
 
    alert(
        "===== RELATÓRIO FINAL =====" +
        "\nTotal de vinhos cadastrados: " + contador +
        "\nTotal com estoque baixo: " + totalEstoqueBaixo +
        "\nVinho mais antigo: " + vinhoMaisAntigo +
        "\nSafra mais antiga: " + safraMaisAntiga
    );
 
    alert(
        "Cadastro finalizado!\n\n" +
        "Para visualizar os resultados do sistema:\n\n" +
        "Pressione F12\n\n" +
        "ou\n\n" +
        "CTRL + SHIFT + I\n\n" +
        "Depois abra a aba CONSOLE."
    );
 
    console.log("===== LISTA DE VINHOS =====");
 
    vinhos.forEach(function(vinho){
 
        console.log(
            vinho.nome +
            " | " +
            vinho.tipo +
            " | Safra: " +
            vinho.safra +
            " | Estoque: " +
            vinho.estoque
        );
 
    });
 
    let estoqueBaixoLista = vinhos.filter(function(vinho){
 
        return vinho.estoque < 5;
 
    });
 
    console.log("===== VINHOS COM ESTOQUE BAIXO =====");
 
    estoqueBaixoLista.forEach(function(vinho){
 
        console.log(
            vinho.nome +
            " | Estoque: " +
            vinho.estoque
        );
 
    });
 
    let nomesMaiusculos = vinhos.map(function(vinho){
 
        return vinho.nome.toUpperCase();
 
    });
 
    console.log("===== NOMES EM MAIÚSCULO =====");
 
    nomesMaiusculos.forEach(function(nome){
 
        console.log(nome);
 
    });
 
    let estoqueTotal = vinhos.reduce(function(total, vinho){
 
        return total + vinho.estoque;
 
    }, 0);
 
    console.log("===== ESTOQUE TOTAL =====");
 
    console.log(estoqueTotal);
 
});
 
botaoSobre.addEventListener("click", function () {
 
    alert(
        "A Vinharia Agnello é um sistema de gerenciamento de vinhos que possibilita cadastrar informações, organizar o estoque e classificar automaticamente cada vinho conforme sua safra."
    );
 
});
 
function mostrarVinho1() {
 
    alert(
        "Aice di Tmesco\n\n" +
        "Vinho originário da Itália.\n" +
        "Possui sabor suave com notas de frutas tropicais."
    );
 
}
 
function mostrarVinho2() {
 
    alert(
        "Viales di Denrs\n\n" +
        "Vinho produzido em Mendoza, na Argentina.\n" +
        "Possui sabor intenso e encorpado."
    );
 
}
 
