let vitoriasDoMeuHeroi = rankingDoHeroi (1000, 5)

console.log (`A quantidade de vitórias do seu herói é ${vitoriasDoMeuHeroi}.`)

function rankingDoHeroi(vitoria, derrota){
    let calculadoraDeRanking = vitoria - derrota
    return calculadoraDeRanking
}

if(vitoriasDoMeuHeroi <=10){
    console.log("Seu herói é nível Ferro!")
} else if(vitoriasDoMeuHeroi > 10 && vitoriasDoMeuHeroi <= 20){
    console.log("Seu herói é nível Bronze!")
} else if(vitoriasDoMeuHeroi > 20 && vitoriasDoMeuHeroi <= 50){
    console.log("Seu herói é nível Prata!")
} else if(vitoriasDoMeuHeroi > 50 && vitoriasDoMeuHeroi <= 80){
    console.log("Seu herói é nível Ouro!")
} else if(vitoriasDoMeuHeroi > 80 && vitoriasDoMeuHeroi <= 90){
    console.log("Seu herói é nível Diamante!")
} else if(vitoriasDoMeuHeroi > 90 && vitoriasDoMeuHeroi <= 100){
    console.log("Seu herói é nível Lendário!")
} else{
    console.log("Seu herói é nível Imortal!")
}