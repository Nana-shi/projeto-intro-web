/*Atividades semana 1*/
/*
const nomeAnime = "One Piece"
const numeroEpisodios = 1000
const dublagem = true
const nomePersonagens = ["Luffy", "Zoro", "Sanji"]

const nomeAnime2 = "Steins;Gate"
const numeroEpisodios2 = 25
const dublagem2 = false
const nomePersonagens2 = ["Okabe", "Kurisu", "Mayuri"]

const nomeAnime3 = "Full Metal Alchemist"
const numeroEpisodios3 = 64
const dublagem3 = true
const nomePersonagens3 = ["Edward", "Alphonse", "Roy Mustang"]

const media = (numeroEpisodios+numeroEpisodios2+numeroEpisodios3)/3

const dublagens = dublagem && dublagem2 && dublagem3

console.log("Média de episodios dos três:", media)
console.log("Todos tem dublagem?", dublagens)

console.log(nomeAnime.toUpperCase(), "\nNumero de episodios:", numeroEpisodios, "\nTem dublagem oficial?", dublagem, 
"\nNome de alguns personagens:", nomePersonagens)

console.log(nomeAnime2.toUpperCase(), "\nNumero de episodios:", numeroEpisodios2, "\nTem dublagem oficial?", dublagem2, 
"\nNome de alguns personagens:", nomePersonagens2)

console.log(nomeAnime3.toUpperCase(), "\nNumero de episodios:", numeroEpisodios3, "\nTem dublagem oficial?", dublagem3,
"\nNome de alguns personagens:", nomePersonagens3)
*/
/*Fim da primeira atividade*/

anime1 = {
    nome: "One Piece",
    numEpisodios: 1031,
    dublagem: true,
    nomePersonagens: ["Luffy", "Zoro", "Sanji"]
}

anime2 = {
    nome: "Steins;Gate",
    numEpisodios: 25,
    dublagem: true,
    nomePersonagens: ["Okabe", "Kurisu", "Mayuri"]
}

anime3 = {
    nome: "Full Metal Alchemist Brotherhood",
    numEpisodios: 64,
    dublagem: true,
    nomePersonagens: ["Edward", "Alphonse", "Roy Mustang"]
}

const animes = []

if (anime1.dublagem === true){
    animes.push(anime1)
} else{
    alert("O anime \"One Piece\" não tem dublagem e não será adicionado!")
}

if(anime2.dublagem === true){
    animes.push(anime2)
} else{
    alert("O anime \"Steins;Gate\" não tem dublagem e não será adicionado!")
}

if(anime3.dublagem === true){
    animes.push(anime3)
} else{
    alert("O anime \"Full Metal Alchemist Brotherhood\" não tem dublagem e não será adicionado!")
}
// console.log(animes)

//Fim atividades semana 2
//1-
for(let i in animes){
    stringNomePersonagens = animes[i].nomePersonagens.toString();
    animes[i].nomePersonagens = stringNomePersonagens
}
//2-
// for(i in animes){
//     console.log(`${animes[i].nome.toUpperCase()}
//     Numero de episodios: ${animes[i].numEpisodios}
//     Tem dublagem?: ${animes[i].dublagem} 
//     Nomes de alguns personagens: ${animes[i].nomePersonagens}`)
// }

//3-

// const viraString = (array) =>{       // Pegar o objeto dentro de um array
//     for(let i in array){
//         for(let item in array[i]){
//             console.log(array[i][item].toString())
//     }
//     }
// }

// viraString(animes)

// const objetoString = (objeto) =>{
//     for(let propriedade in objeto){
//         console.log(objeto[propriedade].toString())
//     }
// }

// objetoString(anime1)

//4-

const filtroItem = (array, string) =>{
    for(let objeto of array){
        // console.log(objeto)
        for(let item in objeto){
            //console.log(objeto[item])
            if(item == string){
                console.log(objeto[item].toString())
            } else{
                alert("Nenhum item foi encontrado nesse objeto!!")
            }
            // if(objeto[item] === string){
            //     //console.log(item)
            // } else{
            //     return alert("Sem item")
            // }
        }
    }
}

filtroItem(animes, "nomePersonagens")