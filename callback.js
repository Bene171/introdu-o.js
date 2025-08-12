const naves = [
    { nome: "Falcon", velocidade: 70 },
    { nome: "Comet", velocidade: 40 },
    { nome: "Raptor", velocidade: 90 }
];

// Função principal
function processarNave(nave, callback) {
    console.log(`🚀 Processando: ${nave.nome}`);
    callback(nave);
}

// Callback 1 - Mostrar informações
function mostrarInfoNave(nave) {
    console.log(`📋 Nome: ${nave.nome}, Velocidade: ${nave.velocidade}`);
}

// Callback 2 - Verificar velocidade
function verificarVelocidade(nave) {
    if (nave.velocidade > 50) {
        console.log("⚡ Nave rápida detectada!");
    } else {
        console.log("🛡 Nave em velocidade segura.");
    }
}

// Callback 3 - Aumentar velocidade
function turbo(nave) {
    nave.velocidade += 20;
    console.log(`🔥 Turbo ativado! Nova velocidade: ${nave.velocidade}`);
}

// 🚀 Testando com ordens diferentes
processarNave(naves[0], mostrarInfoNave);
processarNave(naves[0], verificarVelocidade);

console.log("----------");

processarNave(naves[1], turbo);
processarNave(naves[1], mostrarInfoNave);

console.log("----------");

processarNave(naves[2], verificarVelocidade);
processarNave(naves[2], turbo);
processarNave(naves[2], mostrarInfoNave);
