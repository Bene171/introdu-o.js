// ======= MISSÃO 1 =======
// Nome da nave alienígena avistada (não muda)
const nomeNaveInimiga = "alienígena";

// Quantidade de mísseis disponíveis (pode mudar durante a missão)
let quantidadeMisseis = 5;

// Estado do escudo da nave (true = ligado, false = desligado)
let escudoAtivo = true;

console.log("=== MISSÃO 1 ===");
console.log(`Nave inimiga avistada: ${nomeNaveInimiga}`);
console.log(`Mísseis disponíveis: ${quantidadeMisseis}`);
console.log(`Escudo ativo: ${escudoAtivo ? "Sim" : "Não"}`);

// Dois mísseis disparados
let disparadorDeMisseis = 2;
quantidadeMisseis -= disparadorDeMisseis;

// Escudo desligado após ataque
escudoAtivo = false;
console.log(`A nave alienígena foi atingida! Mísseis restantes: ${quantidadeMisseis}`);
console.log(`Escudo ativo: ${escudoAtivo ? "Sim" : "Não"}`);


// ======= MISSÃO 5 =======
console.log("\n=== MISSÃO 5: Ataque Final ===");

// Recarregando mísseis
quantidadeMisseis = 8;

// Escudo ligado novamente
escudoAtivo = true;

console.log(`Mísseis recarregados: ${quantidadeMisseis}`);
console.log(`Escudo ativo: ${escudoAtivo ? "Sim" : "Não"}`);

// Atacando inimigos
let misseisDisparadosNaMissao5 = 3;
quantidadeMisseis -= misseisDisparadosNaMissao5;
console.log(`Disparamos ${misseisDisparadosNaMissao5} mísseis! Restam ${quantidadeMisseis}.`);

// Status final da missão
if (quantidadeMisseis > 0 && escudoAtivo) {
    console.log("A missão foi um sucesso! A nave está pronta para continuar.");
} else {
    console.log("A nave sofreu danos, missão parcialmente concluída.");
}

// Quantidade inicial de energia
let energia = 100;

// Estado da arma (desligada inicialmente)
let armaLigada = false;

// Verifica se há energia suficiente e se a arma está desligada
function ativarArma(energia, armaLigada) {
    if (energia >= 50 && !armaLigada) {
        console.log("Arma ativada com sucesso!");
        return true;  // retorna o novo estado da arma (ligada)
    } else {
        console.log("Energia insuficiente para ativar a arma");
        return armaLigada;  // retorna o estado da arma sem alterar
    }
}

// Função que recebe energia e estado da arma e exibe status formatado
function mostrarStatus(energiaAtual, armaLigada) {
    console.log(`Energia: ${energiaAtual} | Arma: ${armaLigada ? "Ligada" : "Desligada"}`);
}

// Usa a função ativarArma e atualiza o estado da arma
armaLigada = ativarArma(energia, armaLigada);

// Mostra o status atualizado
mostrarStatus(energia, armaLigada);

function decidirAcao(energia) {
    if (energia >= 75) {
        return "A energia está alta, podemos atacar!";
    }
    else if (energia >= 50) {
        return "A energia está moderada, podemos nos preparar para o ataque.";
    }
    else if (energia >= 25) {
        return "A energia está baixa, precisamos recarregar antes de atacar.";
    }
    else {
        return "A energia está crítica, é melhor recuar e recarregar.";
    }
}

console.log(decidirAcao(80));
console.log(decidirAcao(60));
console.log(decidirAcao(30));
console.log(decidirAcao(10));

// 1. Criamos uma lista (array) com 3 inimigos
const inimigos = ["inimigo 1", "inimigo 2", "inimigo 3"];

// 2. Mostramos no console o primeiro inimigo da lista (posição 0)
console.log(inimigos[0]);

// 3. Adicionamos mais um inimigo no final da lista
inimigos.push("inimigo 4");

// 4. Mostramos quantos inimigos temos na lista
console.log("Total de inimigos: " + inimigos.length);

// 5. Usamos um laço para mostrar todos os inimigos
for (let i = 0; i < inimigos.length; i++) {
    console.log("Inimigo " + (i + 1) + ": " + inimigos[i]);
}
const naves = ["litlle", "bene", "taua", "iron"];

// Deixar todas minúsculas com map
const navesMinusculas = naves.map(nome => nome.toLowerCase());
console.log("Naves minúsculas:", navesMinusculas);

// Filtrar só as que têm a letra 'a'
const navesComA = naves.filter(nome => nome.toLowerCase().includes("a"));
console.log("Naves com a letra A:", navesComA);

const alien = {
    nome: "Zorg",
    planeta: "Xenon",
    poderes: ["telepatia", "invisibilidade", "voo"]
}
console.log(alien.nome);
console.log(alien.planeta);

alien.nivelDeAgressividade = 7;

function processarNave(nave, callback) {
    console.log("Processando a nave: " + nave.nome);
    callback(nave);
}
function mostrarInfoNave(nave) {
    console.log(`Nome da nave: ${nave.nome}, Velocidade: ${nave.velocidade}`);
}

const naveTeste = { nome: "Teste", velocidade: 80 };

processarNave(naveTeste, mostrarInfoNave);


