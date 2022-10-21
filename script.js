/*Atividades semana 1*/

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

console.log("--------------Relatorios semana 1-----------------")
console.log("Média de episodios dos três:", media)
console.log("Todos tem dublagem?", dublagens)

console.log(nomeAnime.toUpperCase(), "\nNumero de episodios:", numeroEpisodios, "\nTem dublagem oficial?", dublagem, 
"\nNome de alguns personagens:", nomePersonagens)

console.log(nomeAnime2.toUpperCase(), "\nNumero de episodios:", numeroEpisodios2, "\nTem dublagem oficial?", dublagem2, 
"\nNome de alguns personagens:", nomePersonagens2)

console.log(nomeAnime3.toUpperCase(), "\nNumero de episodios:", numeroEpisodios3, "\nTem dublagem oficial?", dublagem3,
"\nNome de alguns personagens:", nomePersonagens3)

/*Fim da primeira atividade*/

anime1 = {
    nome: "One Piece",
    numEpisodios: 1000,
    dublagem: true,
    nomePersonagens: ["Luffy", "Zoro", "Sanji"]
}

anime2 = {
    nome: "Steins;Gate",
    numEpisodios: 25,
    dublagem: false,
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
    // alert("O anime \"Steins;Gate\" não tem dublagem e não será adicionado!")
}

if(anime3.dublagem === true){
    animes.push(anime3)
} else{
    alert("O anime \"Full Metal Alchemist Brotherhood\" não tem dublagem e não será adicionado!")
}

console.log("--------------Relatorios semana 2-----------------")
console.log(animes)

//Fim atividades semana 2

console.log("--------------Relatorios semana 3-----------------")
//1-
console.log("ATIVIDADE 1:")

for(let i in animes){
    stringNomePersonagens = animes[i].nomePersonagens.toString();
    animes[i].nomePersonagens = stringNomePersonagens
    console.log(animes[i].nomePersonagens)
}


//2-
console.log("ATIVIDADE 2:")

for(let i in animes){
    for(let j in animes[i]){
        console.log(`${j}: ${animes[i][j]}`)
    }
}

// 3-
console.log("ATIVIDADE 3:")

// const viraString = (array) =>{       // Pegar o objeto dentro de um array
//     for(let i in array){
//         for(let item in array[i]){
//             console.log(array[i][item].toString())
//     }
//     }
// }

// viraString(animes)

const objetoString = (objeto) =>{
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toString())
    }
}

objetoString(anime1)

// 4-
console.log("ATIVIDADE 4:")

const filtroItem = (array, string) =>{
    for(let objeto of array){
        // console.log(objeto)
        for(let item in objeto){
            //console.log(objeto[item])
            if(objeto[item] == string){
                console.log(objeto[item].toString())
            } else{
                // alert("Nenhum item foi encontrado nesse objeto!!")
            }
            // if(objeto[item] === string){
            //     //console.log(item)
            // } else{
            //     return alert("Sem item")
            // }
        }
    } }

filtroItem(animes, 'Full Metal Alchemist Brotherhood')

//Atividades Semana 6

const container = document.getElementById("container")
container.innerHTML += "<div id='busca'>"
const busca = document.getElementById("busca")
busca.innerHTML += "<input type='text' id='nome'>"
busca.innerHTML += "<button type='submit' onclick='filtrarItem(event)'>Buscar</button>"

container.innerHTML += "<section class='bloco' id='anime1'></section>"
anime1 = document.getElementById("anime1")
anime1.innerHTML += "<img class='imagem1' src='https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg' width='200px'>"
anime1.innerHTML += "<ul class='lista' id='lista1'>"
const lista1 = document.getElementById("lista1")
lista1.innerHTML += "<li>Nome: <a href='https://myanimelist.net/anime/21/One_Piece'>One Piece</a></li>"
lista1.innerHTML += "<li>Numero de Episodios: 1032</li>"
lista1.innerHTML += "<li>Tem dublagem oficial (PT/BR): Sim</li>"
lista1.innerHTML += "<li>Alguns personagens: Luffy, Zoro, Sanji</li>"

container.innerHTML += "<section class='bloco' id='anime2'></section>"
anime2 = document.getElementById("anime2")
anime2.innerHTML += "<img class='imagem2' src='https://img1.ak.crunchyroll.com/i/spire2/ff06631478e5344b467111c7aa85ff881302201468_full.jpg' width='200px'>"
anime2.innerHTML += "<ul class='lista' id='lista2'>"
const lista2 = document.getElementById("lista2")
lista2.innerHTML += "<li>Nome: <a href='https://myanimelist.net/anime/9253/Steins_Gate'>Steins;Gate</a></li>"
lista2.innerHTML += "<li>Numero de Episodios: 24</li>"
lista2.innerHTML += "<li>Tem dublagem oficial (PT/BR): Não</li>"
lista2.innerHTML += "<li>Alguns personagens: Okabe, Kurisu, Mayuri</li>"

container.innerHTML += "<section class='bloco' id='anime3'></section>"
anime3 = document.getElementById("anime3")
anime3.innerHTML += "<img class='imagem3' src='https://img1.ak.crunchyroll.com/i/spire4/fabddf1040abbd18948b9aacc18011b31475523493_full.jpg' width='200px'>"
anime3.innerHTML += "<ul class='lista' id='lista3'>"
const lista3 = document.getElementById("lista3")
lista3.innerHTML += "<li>Nome: <a href='https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood'>Full Metal Alchemist: Brotherhood</a></li>"
lista3.innerHTML += "<li>Numero de Episodios: 64</li>"
lista3.innerHTML += "<li>Tem dublagem oficial (PT/BR): Sim</li>"
lista3.innerHTML += "<li>Alguns personagens: Edward, Alphonse, Mustang</li>"

function filtrarItem(event){
    const nome = document.getElementById("nome")      
    if(nome.value === "One Piece"){
        const anime1 = document.getElementById("anime1")
        const anime2 = document.getElementById("anime2")
        const anime3 = document.getElementById("anime3")
        anime1.setAttribute('class', 'bloco')
        anime2.setAttribute('class', 'escondido')
        anime3.setAttribute('class', 'escondido')
    } else if(nome.value === "Steins;Gate"){
        const anime1 = document.getElementById("anime1")
        const anime2 = document.getElementById("anime2")
        const anime3 = document.getElementById("anime3")
        anime1.setAttribute('class', 'escondido')
        anime2.setAttribute('class', 'bloco')
        anime3.setAttribute('class', 'escondido')
    }   else if(nome.value === "Full Metal Alchemist"){
        const anime1 = document.getElementById("anime1")
        const anime2 = document.getElementById("anime2")
        const anime3 = document.getElementById("anime3")
        anime1.setAttribute('class', 'escondido')
        anime2.setAttribute('class', 'escondido')
        anime3.setAttribute('class', 'bloco')
    }       
}