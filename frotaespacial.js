const naves = [
    { nome: "Falcon", velocidade: 80 },
    { nome: "Explorer", velocidade: 45 },
    { nome: "Raptor", velocidade: 60 },
    { nome: "Comet", velocidade: 30 }
];

// 1. Transformar todos os nomes para maiúsculo
const navesMaiusculas = naves.map(nave => nave.nome.toUpperCase());

// 2. Filtrar as naves com velocidade acima de 50
const navesAcima50 = naves.filter(nave => nave.velocidade > 50);

// 3. Criar uma lista só com os nomes das naves rápidas
const resultado = navesAcima50.map(nave => nave.nome);

//Ordenar as naves por velocidade, da mais rápida para a mais lenta:
const navesOrdenadas = [...naves].sort((a, b) => b.velocidade - a.velocidade);

//Somar todas as velocidades
const velocidadeTotal = naves.reduce((soma, nave) => soma + nave.velocidade, 0);

console.log("Nomes em maiúsculo:", navesMaiusculas);
console.log("Naves rápidas:", navesAcima50);
console.log("Nomes das naves rápidas:", resultado);
console.log('naves ordenadas por velocidade:', navesOrdenadas);
console.log("Velocidade total:", velocidadeTotal);
