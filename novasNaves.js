const naves = [
    { nome: "Falcon", velocidade: 70 },
    { nome: "Explorer", velocidade: 45 },
    { nome: "Raptor", velocidade: 90 },
    { nome: "Comet", velocidade: 30 }
];

// Função que processa TODAS as naves
function processarTodasNaves(lista, callback) {
    lista.forEach(nave => {
        console.log("\nProcessando nave:", nave.nome);
        callback(nave);
    });
}

// Outras funções callbacks
function mostrarInfoNave(nave) {
    console.log(`nave: ${nave.nome}, velocidade: ${nave.velocidade}`);
}

function verificarVelocidade(nave) {
    if (nave.velocidade > 50) {
        console.log(`nave: ${nave.nome} rápida`);
    } else {
        console.log(`nave: ${nave.nome} lenta`);
    }
}

// Função para encontrar naves raras e salvar numa lista externa
function verificarNaveRara(nave) {
    if (nave.nome.includes("R")) {
        navesRaras.push(nave);
        console.log(`nave: ${nave.nome} é RARA`);
    } else {
        console.log(`nave: ${nave.nome} é comum`);
    }
}

// Lista que vai guardar as naves raras
const navesRaras = [];

console.log("=== Teste com mostrarInfoNave ===");
processarTodasNaves(naves, mostrarInfoNave);

console.log("\n=== Teste com verificarVelocidade ===");
processarTodasNaves(naves, verificarVelocidade);

console.log("\n=== Teste com verificarNaveRara ===");
processarTodasNaves(naves, verificarNaveRara);

console.log("\n=== Lista final de naves raras ===");
console.log(navesRaras);

function missaoEspecial(nave) {
    if (nave.velocidade > 50 && nave.nome.includes("R")) {
        console.log(`Missão especial para: ${nave.nome}`);
    }
    else if (nave.velocidade <= 50) {
        console.log(`Nave: ${nave.nome} enviada para manutenção`);
    }
    else {
        console.log(`Nave: ${nave.nome} em missão padrão`);
    }
}

console.log("\n=== Teste com missão especial ===");
processarTodasNaves(naves, missaoEspecial);