const frota = [];

function adicionarNaves(nome, velocidade) {
    frota.push({ nome, velocidade });
    console.log(`Nave ${nome} adicionada com velocidade ${velocidade}`);
}

function listarNaves() {
    console.log("Lista de Naves:");
    frota.forEach(nave => {
        console.log(`Nome: ${nave.nome}, Velocidade: ${nave.velocidade}`);
    });
}

function processarTodasNaves(lista, callback) {
    lista.forEach(nave => {
        console.log("\nProcessando nave:", nave.nome);
        callback(nave);
    });
}

function mostrarInfoNave(nave) {
    console.log(`Nave: ${nave.nome}, Velocidade: ${nave.velocidade}`);
}

function verificarVelocidade(nave) {
    if (nave.velocidade > 50) {
        console.log(`Nave: ${nave.nome} rápida`);
    }
}

function verificarNaveRara(nave) {
    if (nave.nome.includes("R")) {
        console.log(`Nave: ${nave.nome} é RARA`);
    }
}

function missaoDaNave(nave) {
    if (nave.velocidade > 50 && nave.nome.includes("R")) {
        console.log(`Missão especial para: ${nave.nome}`);
    } else if (nave.velocidade <= 50) {
        console.log(`Nave: ${nave.nome} enviada para manutenção`);
    } else {
        console.log(`Nave: ${nave.nome} em missão padrão`);
    }
}

function processarFrota(callback) {
    frota.forEach(nave => {
        console.log(`Processando nave: ${nave.nome}`);
        callback(nave);
    });
}

// Testando tudo
console.log("=== adicionar naves ===");
adicionarNaves("Falcon", 70);
adicionarNaves("Explorer", 45);
adicionarNaves("Raptor", 90);
adicionarNaves("Comet", 30);

console.log("\n=== listar naves ===");
listarNaves();

console.log("\n=== processar todas as naves ===");
processarTodasNaves(frota, mostrarInfoNave);

console.log("\n=== verificar velocidade das naves ===");
processarTodasNaves(frota, verificarVelocidade);

console.log("\n=== verificar naves raras ===");
processarTodasNaves(frota, verificarNaveRara);

console.log("\n=== missão das naves ===");
processarTodasNaves(frota, missaoDaNave);
