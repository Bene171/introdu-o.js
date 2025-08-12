let participantes = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 17 },
]
function todosParticipantes(lista, callback) {
    lista.forEach(pessoa => {
        callback(pessoa);
    });
}

function maiorDe18(pessoa) {
    if (pessoa.idade >= 18) {
        console.log(`parabens ${pessoa.nome} você foi aprovado!`);
    } else if (pessoa.idade < 18) {
        console.log(`infelizmente ${pessoa.nome} você não foi aprovado, falta ${18 - pessoa.idade} anos para você completar 18 anos.`);
    }
}
console.log("=== Resultado ===");
todosParticipantes(participantes, maiorDe18);
